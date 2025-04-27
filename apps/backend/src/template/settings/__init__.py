__all__ = [
    "settings",
    "AppSettings",
    "CORSSettings",
    "SwaggerSettings",
]


from pydantic_settings import BaseSettings, SettingsConfigDict

from template.settings.app import AppSettings
from template.settings.cors import CORSSettings
from template.settings.swagger import SwaggerSettings


class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file="../../.env",
        env_nested_delimiter="_",
        env_nested_max_split=1,
        env_prefix="BACKEND_",
        extra="ignore",
    )

    app: AppSettings
    cors: CORSSettings
    swagger: SwaggerSettings


settings = Settings()  # type: ignore
