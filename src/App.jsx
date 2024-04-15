import data from './data/data.json'

const App = () => {
  return (
    <main className="dashboard">
      <div className="profile">
        <div className="profile__content-wrapper">
          <img
            className="profile__image"
            src="/images/image-jeremy.png"
            alt="Jeremy Robson"
          />
          <div className="profile__description">
            <p className="profile__report">Report for</p>
            <p className="profile__name">Jeremy Robson</p>
          </div>
        </div>
        <div className="profile__list-wrapper">
          <ul className="profile__list">
            <li className="profile__list__item">Daily</li>
            <li className="profile__list__item">Weekly</li>
            <li className="profile__list__item">Monthly</li>
          </ul>
        </div>
      </div>
      <div className="stats">
        {data.map((block, index) => {
          return (
            <div key={index} className="block">
              <div className="block__image"></div>
              <div className="block__content">
                <div className="block__header">
                  <p className="block__title">{block.title}</p>
                  <img
                    className="block__ellipsis"
                    src="/images/icon-ellipsis.svg"
                    alt="Ellipsis"
                  />
                </div>
                <div className="block__time">
                  <p className="block__current">
                    {block.timeframes.weekly.current}hrs
                  </p>
                  <p className="block__prev">
                    Last Week - {block.timeframes.weekly.previous}hrs
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </main>
  )
}
export default App
