import random
from typing import Any

import pytest
from fastapi import status
from httpx import AsyncClient
from pydantic import TypeAdapter

from src.api.users.models import User
from src.api.users.repository import UserRepository
from src.api.users.schemas import UserResponse
from tests.utils.operators import icontains
from tests.utils.users.generator import generate_user, generate_username


@pytest.mark.anyio
class TestGetUser:
    async def test_get_user(self, user: User, client: AsyncClient):
        response = await client.get(f"/api/users/{user.username}")

        assert response.status_code == status.HTTP_200_OK, response.json()

        response_user = TypeAdapter(UserResponse).validate_python(response.json())

        assert response_user.id == user.id
        assert response_user.username == user.username
        assert response_user.updated_at == user.updated_at
        assert response_user.created_at == user.created_at

    async def test_get_user_404(self, client: AsyncClient):
        response = await client.get(f"/api/users/{generate_username()}")

        assert response.status_code == status.HTTP_404_NOT_FOUND

    async def test_get_user_422(self, client: AsyncClient):
        response = await client.get("/api/users/Ну это точно не юзернейм как бы эм")

        assert response.status_code == status.HTTP_422_UNPROCESSABLE_ENTITY


@pytest.mark.anyio
class TestGetUsers:
    async def test_get_users_empty(self, client: AsyncClient) -> None:
        response = await client.get("/api/users")

        assert response.status_code == status.HTTP_404_NOT_FOUND

    async def test_get_users_with_users(self, client: AsyncClient, user_repository: UserRepository) -> None:
        users = [generate_user() for _ in range(3)]

        for user in users:
            await user_repository.create(user)

        response = await client.get("/api/users")
        assert response.status_code == status.HTTP_200_OK

        response_users = TypeAdapter(list[UserResponse]).validate_python(response.json())
        response_usernames = {user.username for user in response_users}
        expected_usernames = {user.username for user in users}

        assert response_usernames.issubset(expected_usernames)

    async def test_get_users_q(self, client: AsyncClient, user_repository: UserRepository) -> None:
        users = [generate_user() for _ in range(5)]
        random_user = random.choice(users)

        for user in users:
            await user_repository.create(user)

        response = await client.get("/api/users", params={"q": random_user.username})
        assert response.status_code == status.HTTP_200_OK

        response_users = TypeAdapter(list[UserResponse]).validate_python(response.json())
        response_usernames = {user.username for user in response_users}
        filtered_users = [user for user in users if icontains(user.username, random_user.username)]
        expected_usernames = {user.username for user in filtered_users}

        assert response_usernames.issubset(expected_usernames)

    @pytest.mark.parametrize(
        "params, expected_slice",
        [
            ({"limit": 5}, slice(None, 5)),
            ({"offset": 5}, slice(5, None)),
            ({"limit": 2, "offset": 5}, slice(5, 7)),
        ],
    )
    async def test_get_users_limit_offset(
        self,
        client: AsyncClient,
        user_repository: UserRepository,
        params: dict[str, Any],
        expected_slice: slice,
    ):
        
        users = [generate_user(username=f"user{i}") for i in range(10)]

        for user in users:
            await user_repository.create(user)

        response = await client.get("/api/users", params=params)
        assert response.status_code == status.HTTP_200_OK

        response_users = TypeAdapter(list[UserResponse]).validate_python(response.json())
        response_usernames = {user.username for user in response_users}
        expected_users = users[expected_slice]
        expected_usernames = {user.username for user in expected_users}

        assert response_usernames.issubset(expected_usernames)

    async def test_get_users_q_limit_offset(self, client: AsyncClient, user_repository: UserRepository) -> None:
        users = [generate_user(username=f"user{i}") for i in range(3)]
        random_user = random.choice(users)

        for user in users:
            await user_repository.create(user)

        limit = 2
        offset = 0
        params = {"q": random_user.username, "limit": str(limit), "offset": str(offset)}

        response = await client.get("/api/users", params=params)
        assert response.status_code == status.HTTP_200_OK

        response_users = TypeAdapter(list[UserResponse]).validate_python(response.json())
        response_usernames = {user.username for user in response_users}
        filtered_usernames = [user for user in users if icontains(user.username, random_user.username)]
        expected_users = filtered_usernames[:limit]
        expected_usernames = {user.username for user in expected_users}

        assert response_usernames.issubset(expected_usernames)
