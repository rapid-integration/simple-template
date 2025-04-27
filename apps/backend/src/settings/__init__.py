__all__ = [
    "settings",
    "AppSettings",
    "CORSSettings",
    "SwaggerSettings",
]


from typing import Any

from pydantic_settings import BaseSettings, SettingsConfigDict

from src.settings.app import AppSettings
from src.settings.cors import CORSSettings
from src.settings.swagger import SwaggerSettings


class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file="../../.env",
        env_nested_delimiter="_",
        env_nested_max_split=1,
        env_prefix="BACKEND_",
        extra="ignore",
    )

    host: str
    port: int

    app: AppSettings
    cors: CORSSettings
    swagger: SwaggerSettings

    logging: dict[str, Any] = {
        "version": 1,
        "disable_existing_loggers": False,
        "formatters": {
            "basic": {
                "class": "uvicorn.logging.ColourizedFormatter",
                "format": "%(levelprefix)s %(message)s",
            },
            "verbose": {
                "format": "%(asctime)s %(pathname)s:%(lineno)d %(levelname)s %(message)s",
                "datefmt": "%d.%m.%Y %H:%M:%S",
            },
        },
        "handlers": {
            "console": {
                "class": "logging.StreamHandler",
                "formatter": "basic",
                "stream": "ext://sys.stdout",
            },
        },
        "loggers": {
            "root": {
                "level": "INFO",
                "handlers": ["console"],
            },
            "app": {
                "level": "DEBUG",
                "handlers": ["console"],
            },
            "sqlalchemy.engine": {
                "level": "WARNING",
                "handlers": ["console"],
            },
        },
    }


settings = Settings()  # type: ignore
