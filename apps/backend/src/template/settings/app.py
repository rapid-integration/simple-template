__all__ = [
    "AppSettings",
]

from pydantic import BaseModel


class AppSettings(BaseModel):
    host: str
    port: int
    title: str
    version: str
    root_path: str
    docs_url: str | None
    redoc_url: str | None
    openapi_url: str | None
