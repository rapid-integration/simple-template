from pathlib import Path

import uvicorn

from src.app import app
from src.settings import settings

if __name__ == "__main__":
    uvicorn.run(
        f"{Path(__file__).parent.name}.__main__:app" if settings.app.debug else app,
        host=settings.host,
        port=settings.port,
        reload=settings.app.debug,
    )
