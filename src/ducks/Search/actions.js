export function submitForm(values) {
  return {
    type: 'Search/SUBMIT_FORM',
    values
  }
}

export function removeTodo(id) {
  return {
    type: 'REMOVE_TODO',
    id
  }
}
