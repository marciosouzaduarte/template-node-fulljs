import homeSectionOne from '../../components/sections/HomeSectionOne';
import homeSectionTwo from '../../components/sections/HomeSectionTwo';
import floatImage from '../../components/float/FloatImage';

let Home = {
  is_private: false,

  render: async () => {
    let view = `
          <div>
            <h1>Olá Mundo!</div>
            ${homeSectionOne}
            ${homeSectionTwo}
            ${floatImage}
          </div>
      `;

    return view
  },

  after_render: async () => { }
}

export default Home;