from logging.config import dictConfig

from template.settings import settings

dictConfig(settings.logging)
