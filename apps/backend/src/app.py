__all__ = [
    "app",
]

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from prometheus_fastapi_instrumentator import Instrumentator

from src.routers import router
from src.settings import settings

app = FastAPI(
    debug=settings.app.debug,
    title=settings.app.title,
    version=settings.app.version,
    root_path=settings.app.root_path,
    docs_url=settings.app.docs_url,
    redoc_url=settings.app.redoc_url,
    openapi_url=settings.app.openapi_url,
    swagger_ui_parameters={
        "persistAuthorization": settings.swagger.persist_authorization,
    },
)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=settings.cors.allow_credentials,
    allow_headers=settings.cors.allow_headers,
    allow_methods=settings.cors.allow_methods,
    allow_origins=settings.cors.allow_origins,
)

app.include_router(router)

instrumentator = Instrumentator()

instrumentator.instrument(app).expose(app)
