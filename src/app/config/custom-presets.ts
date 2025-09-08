import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

const Noir = definePreset(Aura, {
  semantic: {
    surface: {
      ground: 'blue'
    }
  },
  components: {
    tabs: {
      activeBar: {
        background: '#6ab0f2'
      },
      tablist: {
        background: 'transparent',
        borderColor: 'gray',
      },
      tab: {
        activeColor: 'white',
      },
      tabpanel: {
        background: 'transparent',
      }
    }
  }
});

export default Noir;
