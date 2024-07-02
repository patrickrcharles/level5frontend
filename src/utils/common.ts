function currency(value: string | number): string {
  let numValue: number;

  // Convert the input to a number if it's a string
  if (typeof value === 'string') {
    numValue = parseFloat(value);
    if (Number.isNaN(numValue)) {
      throw new Error('Invalid numeric string');
    }
  } else {
    numValue = value;
  }

  // Use the toLocaleString method to format the number as US currency
  return numValue.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  });
}

function round(value: string | number): string {
  const formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

  const num = typeof value === 'string' ? parseFloat(value) : value;

  if (Number.isNaN(num)) {
    throw new Error('Invalid numeric string');
  }

  // Format the number to two decimal places
  return formatter.format(num);
}

export { currency, round };
