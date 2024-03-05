// Her bir butonun üzerine, içerikte yazan eyleme karşılık gelen satır içi/inline stiller ekleyin
export default function ButtonVariants() {
  return (
    <span className='wrapper'>
      <button className='button-create' style={{ backgroundColor: 'green', color: 'white', border: 'none' }}>Create</button>

      <button className='button-update' style={{ backgroundColor: 'blue', color: 'white', border: 'none' }}>Update</button>

      <button className='button-delete' style={{ backgroundColor: 'red', color: 'white', border: 'none' }}>Delete</button>
    </span>
  )
}
