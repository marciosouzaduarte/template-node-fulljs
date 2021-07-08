import homeSectionOne from '../../components/sections/HomeSectionOne';
import homeSectionTwo from '../../components/sections/HomeSectionTwo';

let Home = {
  is_private: false,

  render: async () => {
    let view = `
          <div>
            <h1>Olá Mundo!</div>
            ${homeSectionOne}
            ${homeSectionTwo}
          </div>
      `;

    return view
  },

  after_render: async () => { }
}

export default Home;