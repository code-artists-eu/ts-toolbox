export const b64toBlob = (base64: string): Promise<Blob> => fetch(base64).then((res) => res.blob())
