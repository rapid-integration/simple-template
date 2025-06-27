__all__ = [
    "ApiSettings",
]

from pydantic import BaseModel


class ApiSettings(BaseModel):
    username_min_length: int
    username_max_length: int
    username_pattern: str
    password_min_length: int
    password_max_length: int
    password_pattern: str
    search_params_max_limit: int
    token_url: str
