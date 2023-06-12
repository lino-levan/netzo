export default {
  'timeline': {
    'soundtrack': {
      'src':
        'https://shotstack-assets.s3.ap-southeast-2.amazonaws.com/music/unminus/kring.mp3',
      'effect': 'fadeOut',
    },
    'background': '#000000',
    'cache': false,
    'tracks': [
      {
        'clips': [
          {
            'asset': {
              'type': 'html',
              'html': '<h1>{{Property_Title}}</h1>',
              'css':
                'h1 { color: #ffffff; font-size: 60px; font-family: Montserrat ExtraBold; text-align: center; }',
              'width': 1280,
              'height': 100,
            },
            'start': 0,
            'length': 3,
            'fit': 'none',
            'scale': 1,
            'offset': {
              'x': 0,
              'y': -0.3,
            },
            'position': 'center',
            'transition': {
              'in': 'slideRight',
              'out': 'slideRight',
            },
          },
          {
            'asset': {
              'type': 'html',
              'html': '<p>{{Property_Description}}</p>',
              'css':
                'p { color: #ffffff; font-size: 30px; font-family: Montserrat; text-align: center; }',
              'width': 1200,
              'height': 150,
            },
            'start': 1,
            'length': 5,
            'fit': 'none',
            'scale': 1,
            'offset': {
              'x': 0,
              'y': 0,
            },
            'position': 'center',
            'transition': {
              'in': 'slideRight',
              'out': 'slideRight',
            },
          },
        ],
      },
      {
        'clips': [
          {
            'asset': {
              'type': 'image',
              'src': '{{Property_Image_1}}',
            },
            'start': 0,
            'length': 5,
            'effect': 'zoomIn',
            'transition': {
              'in': 'fade',
              'out': 'fade',
            },
            'offset': {
              'x': 0,
              'y': 0,
            },
            'position': 'center',
            'fit': 'crop',
            'opacity': 0.4,
          },
        ],
      },
      {
        'clips': [
          {
            'asset': {
              'type': 'html',
              'html':
                '<h2>Features</h2><ul><li>Bedrooms: {{Property_Bedrooms}}</li><li>Bathrooms: {{Property_Bathrooms}}</li><li>Area: {{Property_Area}} sq. ft.</li></ul>',
              'css':
                'h2 { color: #ffffff; font-size: 40px; font-family: Montserrat ExtraBold; text-align: left; } ul { color: #ffffff; font-size: 30px; font-family: Montserrat; text-align: left; }',
              'width': 1280,
              'height': 100,
            },
            'start': 4,
            'length': 4,
            'fit': 'none',
            'scale': 1,
            'offset': {
              'x': 0,
              'y': 0.3,
            },
            'position': 'center',
            'transition': {
              'in': 'slideLeft',
              'out': 'slideLeft',
            },
          },
        ],
      },
      {
        'clips': [
          {
            'asset': {
              'type': 'html',
              'html':
                '<h2>Contact</h2><p>{{Agent_Name}}</p><p>{{Agent_Phone}}</p><p>{{Agent_Email}}</p>',
              'css':
                'h2 { color: #ffffff; font-size: 40px; font-family: Montserrat ExtraBold; text-align: left; } p { color: #ffffff; font-size: 30px; font-family: Montserrat; text-align: left; }',
              'width': 1280,
              'height': 100,
            },
            'start': 6,
            'length': 4,
            'fit': 'none',
            'scale': 1,
            'offset': {
              'x': 0,
              'y': 0.3,
            },
            'position': 'center',
            'transition': {
              'in': 'slideLeft',
              'out': 'slideLeft',
            },
          },
        ],
      },
    ],
  },
}
