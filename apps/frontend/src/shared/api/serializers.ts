export function serializeFormData<
  T extends Record<string, string | Blob | File | null | undefined>,
>(body: T): FormData {
  const data = new FormData();

  for (const name in body) {
    const value = body[name];

    if (value != null) {
      data.append(name, value);
    }
  }

  return data;
}
