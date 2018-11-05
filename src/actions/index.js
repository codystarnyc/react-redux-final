export const increment = () => ({
  type: 'INCREMENT'
});

export const decrement = () => ({
  type: 'DECREMENT'
});


export const reset = () => ({
  type: 'RESET',
  
});

export const newcount = (number) => ({
  type: 'NEWCOUNT',
  setNewCount: parseInt(number)
});