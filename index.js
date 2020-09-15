const baseUrl = 'http://localhost:3000/api/v1'
const token = 'qW2ZmvZEgwzbuTRoXidk'


const login = async () => {
  const email = 'hello@worl.com'
  const password = 'password'

  const res = await fetch('/login')
  const user = res.json()

  localStorage.setItem('token', user.token)
}

const showRestaurant = (restaurant) => {
  const restaurantList = document.querySelector('#restaurants')

  restaurantList.insertAdjacentHTML('beforeend', `
    <li> ${restaurant.name} </li>
  `)
}

const getRestaurants = async () => {
  const res = await fetch(`${baseUrl}/restaurants`)
  const data = await res.json()

  data.forEach((restaurant) => showRestaurant(restaurant))
}

localStorage.setItem('token', token)


alert(localStorage.getItem('token'))

  // You write this :)
const form = document.querySelector('#new-restaurant')

form.addEventListener('submit', async (event) => {
  event.preventDefault()

  const name = document.querySelector('#name').value

  const res = await fetch(`${baseUrl}/restaurants`, {
    method: 'POST',
    headers: {
      'X-User-Token': token,
      'Content-Type': 'application/json',
      'X-User-Email': 'andrea@admin.com'
    },
    body: JSON.stringify({
      name
    })
  })

  
  const data = await res.json()
  
  console.log('RES: ', data)
  showRestaurant(data)
})

getRestaurants()