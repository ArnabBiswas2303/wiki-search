import style from './Search.module.css'

export default function Search(props) {
  
  let handleChange = (event) => {
    if(event.code === "Enter")
      fetchSearchData(event.target.value);
  }

  let fetchSearchData = async (searchTerm) => {
    console.log("The search :" + searchTerm);

    const response = await fetch(
      `https://www.mediawiki.org/w/api.php?action=query&list=search&srsearch=${searchTerm}&format=json&origin=*`, 
      {
      method: 'GET',       
      cache: 'no-cache', 
      credentials: 'same-origin', 
      headers: {
        'Content-Type': 'application/json'        
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer', 
    });
    
    const data = await response.json();
    console.log(data);
    props.onSearchChange(data.query.search);
  }


  return (
    <div className={style.Search}>
      <input onKeyPress={handleChange} className={`${style.SearchInput} font-sans focus:outline-none focus-within:shadow-lg`} type="text" placeholder="Enter Search Term" />
    </div>
  )
}
