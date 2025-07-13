from src.api.users.models import User
from tests.utils.users.faker import generate_fake_password_hash, generate_fake_username


class UserFactory:
    def create(self, username: str | None = None, password: str | None = None) -> User:
        user = User()

        user.username = username or generate_fake_username()
        user.password = password or generate_fake_password_hash()

        return user
