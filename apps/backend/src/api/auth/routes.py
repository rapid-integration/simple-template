from fastapi import APIRouter, HTTPException, Request, status

from src.api.auth.deps import PasswordRequestFormDepends
from src.api.auth.schemas import AccessTokenResponse
from src.api.tags import Tag
from src.api.users.deps import UserServiceDepends
from src.api.users.schemas import UserRegistrationRequest
from src.security import create_access_token, is_valid_password

router = APIRouter(prefix="/auth", tags=[Tag.AUTH])


@router.post(
    "/register",
    status_code=status.HTTP_201_CREATED,
    responses={
        status.HTTP_201_CREATED: {
            "description": "Registraton was successful",
        },
        status.HTTP_409_CONFLICT: {
            "description": "Username already registered",
        },
    },
)
async def register(request: Request, args: UserRegistrationRequest, service: UserServiceDepends) -> AccessTokenResponse:
    if await service.get_user_by_username(args.username):
        raise HTTPException(status.HTTP_409_CONFLICT, "Username already registered.")

    user = await service.register_user(args)

    return create_access_token(user.id)


@router.post(
    "/login",
    status_code=status.HTTP_200_OK,
    responses={
        status.HTTP_200_OK: {
            "description": "Login was successful",
        },
        status.HTTP_401_UNAUTHORIZED: {
            "description": "Incorrect username or password",
        },
    },
)
async def login(request: Request, form: PasswordRequestFormDepends, service: UserServiceDepends) -> AccessTokenResponse:
    user = await service.get_user_by_username(form.username)

    if not user or not is_valid_password(form.password, user.password):
        raise HTTPException(status.HTTP_401_UNAUTHORIZED, "Incorrect username or password.")

    return create_access_token(user.id)
