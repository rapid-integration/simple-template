from typing import Any

from httpx import AsyncClient, Response


class UsersClient:
    def __init__(self, *, client: AsyncClient) -> None:
        self.client = client

    async def get_users(self, *, params: dict[str, Any] | None = None) -> Response:
        return await self.client.get("/users", params=params)

    async def get_user(self, username: str) -> Response:
        return await self.client.get(f"/users/{username}")
