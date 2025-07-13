from src.settings import settings
from tests.faker import faker


def generate_fake_username() -> str:
    return faker.pystr(
        min_chars=settings.api.username_min_length,
        max_chars=settings.api.username_max_length,
    )


def generate_fake_password() -> str:
    return faker.password(
        length=settings.api.password_min_length,
        special_chars=True,
        digits=True,
        upper_case=True,
        lower_case=True,
    )


def generate_fake_password_hash() -> str:
    return faker.sha256()
