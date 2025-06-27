from fastapi import APIRouter, HTTPException, Request, Response, status

from src.api.users.deps import UserServiceDepends
from src.api.users.me.deps import CurrentUserDepends
from src.api.users.me.schemas import CurrentUserResponse
from src.api.users.models import User
from src.api.users.schemas import UserPasswordRequest, UserUsernameRequest

router = APIRouter(prefix="/me")


@router.get(
    "",
    response_model=CurrentUserResponse,
    status_code=status.HTTP_200_OK,
    responses={
        status.HTTP_403_FORBIDDEN: {
            "description": "Failed to verify credentials",
        },
        status.HTTP_404_NOT_FOUND: {
            "description": "User not found",
        },
    },
)
def get_current_user(request: Request, current_user: CurrentUserDepends) -> User:
    return current_user


@router.patch(
    "/username",
    status_code=status.HTTP_204_NO_CONTENT,
    responses={
        status.HTTP_204_NO_CONTENT: {
            "description": "Username successfully updated",
        },
        status.HTTP_403_FORBIDDEN: {
            "description": "Failed to verify credentials",
        },
        status.HTTP_404_NOT_FOUND: {
            "description": "User not found",
        },
        status.HTTP_409_CONFLICT: {
            "description": "Username already registered",
        },
    },
)
def update_current_user_username(
    request: Request,
    args: UserUsernameRequest,
    service: UserServiceDepends,
    current_user: CurrentUserDepends,
) -> Response:
    user = service.get_user_by_username(args.username)

    if user:
        raise HTTPException(status.HTTP_409_CONFLICT, "Username already registered.")

    service.update_username(current_user, args.username)

    return Response(status_code=status.HTTP_204_NO_CONTENT)


@router.patch(
    "/password",
    status_code=status.HTTP_204_NO_CONTENT,
    responses={
        status.HTTP_204_NO_CONTENT: {
            "description": "Password successfully updated",
        },
        status.HTTP_403_FORBIDDEN: {
            "description": "Failed to verify credentials",
        },
        status.HTTP_404_NOT_FOUND: {
            "description": "User not found",
        },
    },
)
def update_current_user_password(
    request: Request,
    args: UserPasswordRequest,
    service: UserServiceDepends,
    current_user: CurrentUserDepends,
) -> Response:
    service.update_password(current_user, args.password)

    return Response(status_code=status.HTTP_204_NO_CONTENT)
