import style from './Feed.module.css'

export default function Feed(props) {

  const feeds = props.wikidata.map((element) => {
    return (
      <div key={element.pageid} className={`${style.FeedBox} p-6 mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4`}>
      <div>
        <div className="text-xl font-medium text-black">{element.title}</div>
        <p dangerouslySetInnerHTML={{__html: element.snippet}} className="text-slate-500"></p>
      </div>
    </div>
    );
  });

  return (
    <div className={style.Feed}>
      {feeds}
    </div>
  )
}