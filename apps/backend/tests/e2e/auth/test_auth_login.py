from typing import Any

import pytest
from fastapi import status
from httpx import AsyncClient

from tests.utils.users import generate_password, generate_username


@pytest.mark.anyio
class TestAuthLogin:
    async def test_auth_login(self, client: AsyncClient) -> None:
        json = {"username": generate_username(), "password": generate_password()}

        response = await client.post("/api/auth/register", json=json)
        assert response.status_code == status.HTTP_201_CREATED

        response = await client.post("/api/auth/login", data=json)
        assert response.status_code == status.HTTP_200_OK

    @pytest.mark.parametrize(
        "data, status_code",
        [
            ({}, status.HTTP_422_UNPROCESSABLE_ENTITY),
            ({"password": generate_password()}, status.HTTP_422_UNPROCESSABLE_ENTITY),
            ({"username": generate_username()}, status.HTTP_422_UNPROCESSABLE_ENTITY),
            ({"password": "Incorrect", "username": generate_username()}, status.HTTP_401_UNAUTHORIZED),
            ({"password": generate_password(), "username": "Incorrect"}, status.HTTP_401_UNAUTHORIZED),
            ({"password": "Incorrect", "username": "Incorrect"}, status.HTTP_401_UNAUTHORIZED),
        ],
    )
    async def test_auth_login_validation(self, client: AsyncClient, data: dict[str, Any], status_code: int) -> None:
        response = await client.post("/api/auth/login", data=data)

        assert response.status_code == status_code
