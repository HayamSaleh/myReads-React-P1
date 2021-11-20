export const bookShelfs = [
  {
    key: 'currentlyReading',
    display: true,
    title:'Currently Reading',
  },
  {
    key: 'wantToRead',
    display: true,
    title:'Want to Read',
  },
  {
    key: 'read',
    display: true,
    title:'Read',
  },
  {
    key: 'none',
    display: false,
    title:'none',
  }
]

export const getEmptyShelfMessage = (shelfTitle) => {
  return `You have no books on the ${shelfTitle} shelf`;
}