var manip = require('../lib/text/manip'),
    assert = require('assert'),
    vows = require('vows');

vows.describe('Text').addBatch({
  'A simple string': {
    topic: function() { return 'Quisque dui lectus, suscipit nec bibendum.'; },

    'atMost': function(topic) {
      assert.equal(manip.atMost(topic, 15), 'Quisque dui ');
    },

    'wraps': function(topic) {
      assert.deepEqual(manip.wrap(topic, 15), ['Quisque dui ', 'lectus, ', 'suscipit nec ', 'bibendum.']);
    }
  },

  'A string with a long word': {
    topic: function() { return 'Lorem ipsum dolor sit amet, Curabituraliquamorcivelestsodalesquisblanditmiscelerisque adipiscing elit.'; },

    'atMost': function(topic) {
      assert.equal(manip.atMost(topic), 'Lorem ipsum dolor sit amet, ');
    },

    'wraps': function(topic) {
      assert.deepEqual(manip.wrap(topic), ['Lorem ipsum dolor sit amet, ', 'Curabituraliquamorcivelestsodalesquisblanditmiscelerisque adipiscing ', 'elit.']);
    },

    'wraps hard': function(topic) {
      assert.deepEqual(manip.wrap(topic, 30, 50), ['Lorem ipsum dolor sit amet, ', 'Curabituraliquamorcivelestsodalesquisblanditmiscel', 'erisque adipiscing elit.']);
    }
  },

  'A multiline string (email body)': {
    topic: function() { return "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui lectus, suscipit nec bibendum et, tristique pretium quam. Curabitur ultricies congue felis, sit amet mattis diam varius rutrum. Cras iaculis gravida enim, ac pellentesque sapien posuere non. Praesent non nulla lorem, in gravida ligula. Donec ultricies, purus nec congue hendrerit, elit tellus bibendum felis, sed commodo magna nunc ut nulla. Nulla facilisi. Praesent vitae magna at neque semper viverra. Sed lobortis neque quis justo dictum sit amet ultricies augue consequat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam eleifend mattis blandit. Quisque in leo in lectus vulputate adipiscing eu a felis. Quisque vel purus non enim rutrum fringilla.\rMorbi consectetur dignissim iaculis. Vivamus at purus enim, at viverra nisl. Vestibulum ac consequat quam. Mauris ipsum nunc, feugiat at dictum eu, tincidunt id odio. Nullam egestas pretium urna gravida sagittis. Praesent aliquet purus nisl. Quisque ut fringilla tortor. Nulla facilisi. Sed id sollicitudin turpis. Sed quis erat sapien. Praesent vulputate nulla a neque varius a fermentum nibh aliquet. Cras nisi ipsum, scelerisque ut euismod non, mattis et eros. Morbi scelerisque, erat eget ultrices volutpat, dolor justo interdum erat, accumsan hendrerit sapien est suscipit lorem. Quisque egestas aliquet diam, eget malesuada neque commodo nec. Suspendisse potenti. Nulla lacinia quam metus. Sed sit amet mi ac lectus aliquet eleifend. Donec tempus odio rutrum tortor placerat malesuada. Proin semper lacus cursus risus fermentum ullamcorper.\r\nDuis imperdiet vehicula vestibulum. Nunc augue velit, feugiat vitae fringilla in, condimentum at enim. In hac habitasse platea dictumst. Aenean eleifend commodo felis, vitae mattis diam semper a. Aenean velit diam, aliquam in fringilla sit amet, elementum ac quam. Cras laoreet dolor ac eros sollicitudin at aliquet quam tincidunt. Vivamus est erat, ornare ac interdum vel, pretium eget ante. Sed egestas viverra risus, aliquam pulvinar sem mattis non. Pellentesque dapibus scelerisque nisl id convallis. Vestibulum ut arcu tellus. Ut vehicula sagittis velit, at semper justo suscipit ac. Donec lorem lorem, hendrerit non dapibus ut, mattis a arcu. Curabitur non mauris tortor, sed condimentum lorem. Proin egestas mauris ut elit rutrum molestie.\nDuis erat nulla, porta a tincidunt vel, imperdiet et augue. Donec ac diam eu est iaculis tempus. Maecenas vel tristique est. Nam vitae sagittis libero. Donec et tellus arcu. Vestibulum eleifend felis dictum risus pharetra fringilla malesuada neque dapibus. Pellentesque posuere urna eros, sed sagittis dui. Integer non velit urna, sed vulputate nisl. In et velit sed sem iaculis adipiscing. Duis id quam lacus. Suspendisse scelerisque libero eget ligula pharetra cursus. Phasellus feugiat dignissim tortor, sit amet mattis risus eleifend ac. Suspendisse in tellus non risus viverra laoreet sed in erat. Integer non massa nisl. Suspendisse fringilla fringilla tincidunt. Nullam eu ligula erat. Nunc nec mi ut urna tristique faucibus at sit amet tellus. Nulla interdum sollicitudin nisl at vehicula.\nNulla hendrerit, urna at tincidunt vulputate, est purus hendrerit nisl, at molestie elit odio a nisi. Proin bibendum facilisis sollicitudin. Suspendisse sed vestibulum ligula. Proin et consequat ligula. Praesent tristique, est sed consequat aliquet, lorem tortor laoreet augue, nec tincidunt sapien lorem et nisl. Maecenas ut eros sed libero interdum venenatis et tincidunt ligula. Pellentesque eleifend ultrices odio id egestas. Donec blandit lorem id tellus egestas gravida. Pellentesque pretium adipiscing dignissim. Nullam nunc mauris, feugiat nec molestie in, imperdiet non est. Nulla quis gravida ligula. Donec nunc eros, placerat sed volutpat ut, suscipit at lectus.\r\nCurabiturmalesuadamolestiemaurisnongravida.Fuscescelerisquedoloraliquamnislconsecteturvarius.Invelviverraelit.Quisquepurusrisus,pulvinaregestasvestibulumin,vehiculabibendumipsum.Integerinarcudolor.Nullaporttitorsemegetnullaimperdieteuismod.Curabiturmaurismagna,sollicitudinsedconvallisnec,vulputatequisnunc.Donecduidui,pulvinarasemperid,vehiculavitaeneque.Donecultricieslectussitametelittristiquerhoncus.Praesentvitaenisilectus.Suspendissevenenatisvelitquisduimalesuadasollicitudin.Donecaelementumlibero.Sedlaciniaultricieslacinia.Vestibulumetmaurisligula.Naminterdumornarecondimentum.Etiamauguevelit,tristiqueetluctuset,vulputateaccumsannisl.Phasellusquiserosinnibhsagittisiaculis.Crasidurnaeuerosultriciesmolestie.Sedquisantecommodoenimdignissimcondimentum.Nullaathendreriturna.Proinviverranisilectus,intristiquelectus.Utvitaeeratmetus.Nullasedsagittismauris.Praesentornarepellentesqueodio,acfermentumnullavehiculaeu.Nuncfacilisis,ipsumasodalessemper,arcuvelitornaresem,idtemporeratjustonecarcu.Vestibulumdapibussagittislectus.Pellentesquehabitantmorbitristiquesenectusetnetusetmalesuadafamesacturpisegestas.Curabituraliquamorcivelestsodalesquisblanditmiscelerisque.Namdiamsem,rutrumidfacilisisid,ultriciesnecpurus.Pellentesqueorcitellus,placeratutluctusac,egestasnonsem.\r\n"; },

    'wraps': function(topic) {

      function wrap(result, line) {
        return result.concat(manip.wrap(line, 70, 990));
      }

      assert.deepEqual(manip.splitLines(topic).reduce(wrap, []), [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui ',
        'lectus, suscipit nec bibendum et, tristique pretium quam. Curabitur ',
        'ultricies congue felis, sit amet mattis diam varius rutrum. Cras ',
        'iaculis gravida enim, ac pellentesque sapien posuere non. Praesent non ',
        'nulla lorem, in gravida ligula. Donec ultricies, purus nec congue ',
        'hendrerit, elit tellus bibendum felis, sed commodo magna nunc ut ',
        'nulla. Nulla facilisi. Praesent vitae magna at neque semper viverra. ',
        'Sed lobortis neque quis justo dictum sit amet ultricies augue ',
        'consequat. Class aptent taciti sociosqu ad litora torquent per conubia ',
        'nostra, per inceptos himenaeos. Aliquam eleifend mattis blandit. ',
        'Quisque in leo in lectus vulputate adipiscing eu a felis. Quisque vel ',
        'purus non enim rutrum fringilla.',
        'Morbi consectetur dignissim iaculis. Vivamus at purus enim, at viverra ',
        'nisl. Vestibulum ac consequat quam. Mauris ipsum nunc, feugiat at ',
        'dictum eu, tincidunt id odio. Nullam egestas pretium urna gravida ',
        'sagittis. Praesent aliquet purus nisl. Quisque ut fringilla tortor. ',
        'Nulla facilisi. Sed id sollicitudin turpis. Sed quis erat sapien. ',
        'Praesent vulputate nulla a neque varius a fermentum nibh aliquet. Cras ',
        'nisi ipsum, scelerisque ut euismod non, mattis et eros. Morbi ',
        'scelerisque, erat eget ultrices volutpat, dolor justo interdum erat, ',
        'accumsan hendrerit sapien est suscipit lorem. Quisque egestas aliquet ',
        'diam, eget malesuada neque commodo nec. Suspendisse potenti. Nulla ',
        'lacinia quam metus. Sed sit amet mi ac lectus aliquet eleifend. Donec ',
        'tempus odio rutrum tortor placerat malesuada. Proin semper lacus ',
        'cursus risus fermentum ullamcorper.',
        'Duis imperdiet vehicula vestibulum. Nunc augue velit, feugiat vitae ',
        'fringilla in, condimentum at enim. In hac habitasse platea dictumst. ',
        'Aenean eleifend commodo felis, vitae mattis diam semper a. Aenean ',
        'velit diam, aliquam in fringilla sit amet, elementum ac quam. Cras ',
        'laoreet dolor ac eros sollicitudin at aliquet quam tincidunt. Vivamus ',
        'est erat, ornare ac interdum vel, pretium eget ante. Sed egestas ',
        'viverra risus, aliquam pulvinar sem mattis non. Pellentesque dapibus ',
        'scelerisque nisl id convallis. Vestibulum ut arcu tellus. Ut vehicula ',
        'sagittis velit, at semper justo suscipit ac. Donec lorem lorem, ',
        'hendrerit non dapibus ut, mattis a arcu. Curabitur non mauris tortor, ',
        'sed condimentum lorem. Proin egestas mauris ut elit rutrum molestie.',
        'Duis erat nulla, porta a tincidunt vel, imperdiet et augue. Donec ac ',
        'diam eu est iaculis tempus. Maecenas vel tristique est. Nam vitae ',
        'sagittis libero. Donec et tellus arcu. Vestibulum eleifend felis ',
        'dictum risus pharetra fringilla malesuada neque dapibus. Pellentesque ',
        'posuere urna eros, sed sagittis dui. Integer non velit urna, sed ',
        'vulputate nisl. In et velit sed sem iaculis adipiscing. Duis id quam ',
        'lacus. Suspendisse scelerisque libero eget ligula pharetra cursus. ',
        'Phasellus feugiat dignissim tortor, sit amet mattis risus eleifend ac. ',
        'Suspendisse in tellus non risus viverra laoreet sed in erat. Integer ',
        'non massa nisl. Suspendisse fringilla fringilla tincidunt. Nullam eu ',
        'ligula erat. Nunc nec mi ut urna tristique faucibus at sit amet ',
        'tellus. Nulla interdum sollicitudin nisl at vehicula.',
        'Nulla hendrerit, urna at tincidunt vulputate, est purus hendrerit ',
        'nisl, at molestie elit odio a nisi. Proin bibendum facilisis ',
        'sollicitudin. Suspendisse sed vestibulum ligula. Proin et consequat ',
        'ligula. Praesent tristique, est sed consequat aliquet, lorem tortor ',
        'laoreet augue, nec tincidunt sapien lorem et nisl. Maecenas ut eros ',
        'sed libero interdum venenatis et tincidunt ligula. Pellentesque ',
        'eleifend ultrices odio id egestas. Donec blandit lorem id tellus ',
        'egestas gravida. Pellentesque pretium adipiscing dignissim. Nullam ',
        'nunc mauris, feugiat nec molestie in, imperdiet non est. Nulla quis ',
        'gravida ligula. Donec nunc eros, placerat sed volutpat ut, suscipit at ',
        'lectus.',
        'Curabiturmalesuadamolestiemaurisnongravida.Fuscescelerisquedoloraliquamnislconsecteturvarius.Invelviverraelit.Quisquepurusrisus,pulvinaregestasvestibulumin,vehiculabibendumipsum.Integerinarcudolor.Nullaporttitorsemegetnullaimperdieteuismod.Curabiturmaurismagna,sollicitudinsedconvallisnec,vulputatequisnunc.Donecduidui,pulvinarasemperid,vehiculavitaeneque.Donecultricieslectussitametelittristiquerhoncus.Praesentvitaenisilectus.Suspendissevenenatisvelitquisduimalesuadasollicitudin.Donecaelementumlibero.Sedlaciniaultricieslacinia.Vestibulumetmaurisligula.Naminterdumornarecondimentum.Etiamauguevelit,tristiqueetluctuset,vulputateaccumsannisl.Phasellusquiserosinnibhsagittisiaculis.Crasidurnaeuerosultriciesmolestie.Sedquisantecommodoenimdignissimcondimentum.Nullaathendreriturna.Proinviverranisilectus,intristiquelectus.Utvitaeeratmetus.Nullasedsagittismauris.Praesentornarepellentesqueodio,acfermentumnullavehiculaeu.Nuncfacilisis,ipsumasodalessemper,arcuvelitornaresem,idtemporeratjuston',
        'ecarcu.Vestibulumdapibussagittislectus.Pellentesquehabitantmorbitristiquesenectusetnetusetmalesuadafamesacturpisegestas.Curabituraliquamorcivelestsodalesquisblanditmiscelerisque.Namdiamsem,rutrumidfacilisisid,ultriciesnecpurus.Pellentesqueorcitellus,placeratutluctusac,egestasnonsem.'
      ]);
    }
  }
}).export(module);