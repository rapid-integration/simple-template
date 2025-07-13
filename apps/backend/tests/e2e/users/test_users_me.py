import pytest
from fastapi import status
from httpx import AsyncClient

from tests.utils.users.generator import generate_password, generate_username


@pytest.mark.anyio
class TestGetUsersMe:
    async def test_get_users_me(self, client: AsyncClient) -> None:
        username = generate_username()
        response = await client.post("/api/auth/register", json={"username": username, "password": generate_password()})

        assert response.status_code == status.HTTP_201_CREATED
        token = response.json().get("access_token")
        if not token:
            raise AssertionError

        headers = {
            "Authorization": f"Bearer {token}",
        }
        response = await client.get("/api/users/me", headers=headers)
        assert response.status_code == status.HTTP_200_OK
        assert response.json().get("username") == username

        response = await client.get("/api/users/me")
        assert response.status_code == status.HTTP_401_UNAUTHORIZED

        headers = {
            "Authorization": "Bearer bvijabdvijlbslbvjdbvhj",
        }
        response = await client.get("/api/users/me", headers=headers)
        assert response.status_code == status.HTTP_403_FORBIDDEN

    async def test_patch_users_me_username(self, client: AsyncClient):
        username1 = generate_username()
        password1 = generate_password()
        data1 = {"username": username1, "password": password1}

        username2 = generate_username()
        password2 = generate_password()
        data2 = {"username": username2, "password": password2}

        username3 = generate_username()

        response = await client.post("/api/auth/register", json=data1)
        assert response.status_code == status.HTTP_201_CREATED
        response = await client.post("/api/auth/register", json=data2)
        assert response.status_code == status.HTTP_201_CREATED
        response = await client.post("/api/auth/login", data=data1)
        assert response.status_code == status.HTTP_200_OK

        token = response.json().get("access_token")
        headers = {
            "Authorization": f"Bearer {token}",
        }
        body = {"username": username3}
        response = await client.patch("/api/users/me/username", headers=headers, json=body)
        assert response.status_code == status.HTTP_204_NO_CONTENT
        response = await client.get("/api/users/me", headers=headers)
        assert response.json().get("username") == body["username"]

        body = {"username": username2}
        response = await client.patch("/api/users/me/username", headers=headers, json=body)
        assert response.status_code == status.HTTP_409_CONFLICT

        body = {"username": "g"}
        response = await client.patch("/api/users/me/username", headers=headers, json=body)
        assert response.status_code == status.HTTP_422_UNPROCESSABLE_ENTITY

    async def test_patch_users_me_password(self, client: AsyncClient):
        username1 = generate_username()
        password1 = generate_password()
        data1 = {"username": username1, "password": password1}

        password2 = generate_password()

        response = await client.post("/api/auth/register", json=data1)
        assert response.status_code == status.HTTP_201_CREATED
        response = await client.post("/api/auth/login", data=data1)
        assert response.status_code == status.HTTP_200_OK

        token = response.json().get("access_token")
        headers = {
            "Authorization": f"Bearer {token}",
        }

        body = {"new_password": password2, "old_password": password1}
        response = await client.patch("/api/users/me/password", headers=headers, json=body)
        assert response.status_code == status.HTTP_204_NO_CONTENT

        response = await client.post("/api/auth/login", data={"username": username1, "password": password2})
        assert response.status_code == status.HTTP_200_OK, response.json()

        response = await client.post("/api/auth/login", data={"username": username1, "password": password1})
        assert response.status_code == status.HTTP_401_UNAUTHORIZED, response.json()

        body = {"new_password": "g", "old_password": "1"}
        response = await client.patch("/api/users/me/password", headers=headers, json=body)
        assert response.status_code == status.HTTP_422_UNPROCESSABLE_ENTITY

        body = {"new_password": password1, "old_password": "saflksajfslaksla"}
        response = await client.patch("/api/users/me/password", headers=headers, json=body)
        assert response.status_code == status.HTTP_403_FORBIDDEN
