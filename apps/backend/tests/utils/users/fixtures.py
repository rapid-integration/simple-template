import pytest
from sqlalchemy.ext.asyncio import AsyncSession

from src.api.users.models import User
from src.api.users.repository import UserRepository
from tests.utils.users.factory import UserFactory


@pytest.fixture(scope="function")
async def user_factory() -> UserFactory:
    return UserFactory()


@pytest.fixture(scope="function")
async def user_repository(session: AsyncSession) -> UserRepository:
    return UserRepository(session=session)


@pytest.fixture(scope="function")
async def user_fake_raw(user_factory: UserFactory) -> User:
    return user_factory.create()


@pytest.fixture(scope="function")
async def user_fake(user_fake_raw: User, user_repository: UserRepository) -> User:
    return await user_repository.create(user_fake_raw)
