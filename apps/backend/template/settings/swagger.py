__all__ = [
    "SwaggerSettings",
]

from pydantic import BaseModel


class SwaggerSettings(BaseModel):
    persist_authorization: bool
