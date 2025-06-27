__all__ = [
    "app",
]

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from src.api import router
from src.settings import settings

app = FastAPI(
    debug=settings.app.debug,
    title=settings.app.title,
    summary=settings.app.summary,
    description=settings.app.description,
    version=settings.app.version,
    openapi_url=settings.app.openapi_url,
    docs_url=settings.app.docs_url,
    redoc_url=settings.app.redoc_url,
    root_path=settings.app.root_path,
    swagger_ui_parameters=settings.swagger.parameters,
)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=settings.cors.allow_credentials,
    allow_headers=settings.cors.allow_headers,
    allow_methods=settings.cors.allow_methods,
    allow_origins=settings.cors.allow_origins,
)

app.include_router(router)

if not settings.app.debug:
    from prometheus_fastapi_instrumentator import Instrumentator

    instrumentator = Instrumentator()

    instrumentator.instrument(app).expose(app)
