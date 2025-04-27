from logging.config import dictConfig

from src.settings import settings

dictConfig(settings.logging)
