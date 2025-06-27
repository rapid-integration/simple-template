__all__ = [
    "PasswordBearerDepends",
    "PasswordRequestFormDepends",
]

from typing import Annotated

from fastapi import Depends
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm

from src.settings import settings

oauth2_bearer = OAuth2PasswordBearer(settings.api.token_url)
optional_oauth2_bearer = OAuth2PasswordBearer(settings.api.token_url, auto_error=False)

PasswordBearerDepends = Annotated[str, Depends(oauth2_bearer)]
OptionalPasswordBearerDepends = Annotated[str, Depends(oauth2_bearer)]

PasswordRequestFormDepends = Annotated[OAuth2PasswordRequestForm, Depends()]
