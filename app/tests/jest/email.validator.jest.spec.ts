// Validador de email mais rigoroso que requer domínio com TLD
function strictEmailValidator(control) {
  if (!control.value) {
    return null;
  }
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(control.value) ? null : { strictEmail: true };
}

describe('strictEmailValidator', () => {
  it('should return null for valid email', () => {
    const control = { value: 'ada@example.com' };
    const result = strictEmailValidator(control);
    expect(result).toBeNull();
  });

  it('should return null for empty value', () => {
    const control = { value: '' };
    const result = strictEmailValidator(control);
    expect(result).toBeNull();
  });

  it('should return error for email without domain', () => {
    const control = { value: 'teste@' };
    const result = strictEmailValidator(control);
    expect(result).toEqual({ strictEmail: true });
  });

  it('should return error for email without TLD', () => {
    const control = { value: 'teste@domain' };
    const result = strictEmailValidator(control);
    expect(result).toEqual({ strictEmail: true });
  });

  it('should return error for email without @', () => {
    const control = { value: 'invalid-email' };
    const result = strictEmailValidator(control);
    expect(result).toEqual({ strictEmail: true });
  });

  it('should return error for email with space', () => {
    const control = { value: 'test @example.com' };
    const result = strictEmailValidator(control);
    expect(result).toEqual({ strictEmail: true });
  });

  it('should accept valid emails with dots in domain', () => {
    const control = { value: 'test@mail.example.com' };
    const result = strictEmailValidator(control);
    expect(result).toBeNull();
  });

  it('should accept valid emails with plus sign', () => {
    const control = { value: 'test+tag@example.com' };
    const result = strictEmailValidator(control);
    expect(result).toBeNull();
  });

  it('should accept valid emails with numbers', () => {
    const control = { value: 'test123@example456.com' };
    const result = strictEmailValidator(control);
    expect(result).toBeNull();
  });
});
