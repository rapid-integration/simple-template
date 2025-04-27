from pathlib import Path

import uvicorn

from template.app import app
from template.settings import settings

if __name__ == "__main__":
    uvicorn.run(
        f"{Path(__file__).parent.name}.{Path(__file__).stem}:{f'{app=}'.split('=')[0]}" if settings.app.debug else app,
        host=settings.host,
        port=settings.port,
        reload=settings.app.debug,
    )
