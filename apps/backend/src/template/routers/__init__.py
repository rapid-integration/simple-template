__all__ = [
    "router",
]

from fastapi import status
from fastapi.responses import JSONResponse
from fastapi.routing import APIRouter

router = APIRouter()


@router.get(
    path="/",
    summary="Health Check",
    responses={
        status.HTTP_200_OK: {"description": "The API is healthy"},
    },
)
def root() -> JSONResponse:
    """Check if the API is healthy."""
    return JSONResponse(
        content={"detail": "Healthy"},
        status_code=status.HTTP_200_OK,
    )
