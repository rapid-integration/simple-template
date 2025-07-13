from uuid import uuid4

import pytest
from sqlalchemy.exc import IntegrityError

from src.api.params import SearchParams
from src.api.users.models import User
from src.api.users.repository import UserRepository
from tests.utils.users import generate_user, generate_username


@pytest.mark.anyio
class TestUserRepository:
    async def test_create_success(self, user_repository: UserRepository) -> None:
        user = await user_repository.create(generate_user())

        assert user.id is not None
        assert user.created_at is not None
        assert user.updated_at is not None
        assert user.username == user.username

    async def test_create_unique_username(self, user_repository: UserRepository) -> None:
        user1 = generate_user(username="username")
        user2 = generate_user(username="username")

        await user_repository.create(user1)

        with pytest.raises(IntegrityError):
            await user_repository.create(user2)

    async def test_get_by_id_existing(self, user: User, user_repository: UserRepository) -> None:
        result = await user_repository.get_by_id(user.id)

        assert result == user

    async def test_get_by_id_non_existing(self, user_repository: UserRepository) -> None:
        result = await user_repository.get_by_id(uuid4())

        assert result is None

    async def test_get_by_username_existing(self, user: User, user_repository: UserRepository) -> None:
        result = await user_repository.get_by_username(user.username)

        assert result == user

    async def test_get_by_username_non_existing(self, user_repository: UserRepository) -> None:
        result = await user_repository.get_by_username(generate_username())

        assert result is None

    async def test_update_user(self, user: User, user_repository: UserRepository) -> None:
        new_username = generate_username()
        old_username = user.username

        user.username = new_username
        await user_repository.update(user)

        updated_user = await user_repository.get_by_id(user.id)

        assert updated_user is not None
        assert updated_user.username == new_username
        assert updated_user.username != old_username

    async def test_get_all_empty(self, user_repository: UserRepository) -> None:
        users = await user_repository.get_all()

        assert len(users) == 0

    async def test_get_all_with_users(self, user_repository: UserRepository) -> None:
        count = 3

        for _ in range(count):
            await user_repository.create(generate_user())

        users = await user_repository.get_all(SearchParams())

        assert len(users) == count

    async def test_get_all_pagination(self, user_repository: UserRepository) -> None:
        count = 5

        for _ in range(count):
            await user_repository.create(generate_user())

        page1 = await user_repository.get_all(SearchParams(limit=2))
        assert len(page1) == 2

        page2 = await user_repository.get_all(SearchParams(limit=2, offset=2))
        assert len(page2) == 2

        assert page1[0].id != page2[0].id

    async def test_get_all_search(self, user_repository: UserRepository) -> None:
        user1 = await user_repository.create(generate_user(username="alice123"))

        results = await user_repository.get_all(SearchParams(q="alic"))

        assert len(results) == 1
        assert results[0].id == user1.id

    async def test_get_all_ordering(self, user_repository: UserRepository) -> None:
        await user_repository.create(generate_user(username="z_user"))
        await user_repository.create(generate_user(username="a_user"))

        users = await user_repository.get_all(SearchParams())

        assert users[0].username == "a_user"
        assert users[1].username == "z_user"
