from dataclasses import dataclass

from src.settings import settings


@dataclass
class SearchParams:
    q: str | None = None
    offset: int = 0
    limit: int = settings.api.search_params_max_limit
