from asyncio import sleep

import pytest

from src.api.users.me.service import CurrentUserService
from src.api.users.models import User
from src.api.users.service import UserService
from tests.utils.users import generate_password, generate_username


@pytest.mark.anyio
class TestCurrentUserService:
    async def test_update_username(
        self,
        user: User,
        user_service: UserService,
        current_user_service: CurrentUserService,
    ) -> None:
        old_username = user.username
        new_username = generate_username()

        await current_user_service.update_username(user, new_username)

        refreshed_user = await user_service.get_user_by_id(user.id)

        assert refreshed_user is not None
        assert refreshed_user.username != old_username
        assert refreshed_user.username == new_username

    async def test_update_password(
        self,
        user: User,
        user_service: UserService,
        current_user_service: CurrentUserService,
    ) -> None:
        old_password = user.password
        new_password = generate_password()

        await current_user_service.update_password(user, new_password)

        refreshed_user = await user_service.get_user_by_id(user.id)

        assert refreshed_user is not None
        assert refreshed_user.password != old_password
        assert refreshed_user.password != new_password  # Ensure the password is hashed
