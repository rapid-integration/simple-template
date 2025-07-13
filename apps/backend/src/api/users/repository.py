from typing import Annotated, Sequence
from uuid import UUID

from fastapi import Depends
from sqlalchemy import select

from src.api.params import SearchParams
from src.api.users.models import User
from src.db.deps import SessionDepends


class UserRepository:
    def __init__(self, session: SessionDepends) -> None:
        self.session = session

    async def create(self, user: User) -> User:
        self.session.add(user)
        await self.session.commit()
        await self.session.refresh(user)
        return user

    async def update(self, user: User) -> None:
        await self.session.commit()
        await self.session.refresh(user)

    async def get_by_username(self, username: str) -> User | None:
        stmt = select(User).where(User.username == username)
        res = await self.session.execute(stmt)
        return res.scalar_one_or_none()

    async def get_by_id(self, id: str | UUID) -> User | None:
        stmt = select(User).where(User.id == id)
        res = await self.session.execute(stmt)
        return res.scalar_one_or_none()

    async def get_all(self, search_params: SearchParams = SearchParams()) -> Sequence[User]:
        stmt = select(User)

        if search_params.q:
            stmt = stmt.filter(User.username.icontains(search_params.q))

        stmt = stmt.order_by(User.username).offset(search_params.offset).limit(search_params.limit)
        res = await self.session.execute(stmt)

        return res.scalars().all()


UserRepositoryDepends = Annotated[UserRepository, Depends(UserRepository)]
