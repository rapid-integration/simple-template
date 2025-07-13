from typing import Any

import pytest
from fastapi import status
from httpx import AsyncClient

from tests.utils.users import generate_password, generate_username


@pytest.mark.anyio
class TestAuthRegister:
    async def test_auth_register(self, client: AsyncClient):
        response = await client.post(
            "/api/auth/register",
            json={
                "username": generate_username(),
                "password": generate_password(),
            },
        )

        assert response.status_code == status.HTTP_201_CREATED

    @pytest.mark.parametrize(
        "data, status_code",
        [
            ({}, status.HTTP_422_UNPROCESSABLE_ENTITY),
            ({"password": generate_password()}, status.HTTP_422_UNPROCESSABLE_ENTITY),
            ({"username": generate_username()}, status.HTTP_422_UNPROCESSABLE_ENTITY),
            ({"password": "short", "username": generate_username()}, status.HTTP_422_UNPROCESSABLE_ENTITY),
            ({"password": generate_password(), "username": "j"}, status.HTTP_422_UNPROCESSABLE_ENTITY),
            ({"password": "Weak", "username": "john@doe.com"}, status.HTTP_422_UNPROCESSABLE_ENTITY),
        ],
    )
    async def test_auth_register_validation(self, client: AsyncClient, data: dict[str, Any], status_code: int):
        response = await client.post(
            "/api/auth/register",
            json={
                "username": data.get("username", ""),
                "password": data.get("password", ""),
            },
        )

        assert response.status_code == status_code

    async def test_auth_register_conflict(self, client: AsyncClient):
        username = generate_username()
        password = generate_password()
        json = {"username": username, "password": password}

        response = await client.post("/api/auth/register", json=json)
        response = await client.post("/api/auth/register", json=json)

        assert response.status_code == status.HTTP_409_CONFLICT
