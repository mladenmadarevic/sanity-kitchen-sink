export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5faa56ed47732970d95778e3',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-ddj6bs3p',
                  apiId: '1cef9fd8-3b59-4379-8f03-91fe7e50e710'
                },
                {
                  buildHookId: '5faa56edd8b03985210ac501',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-5txd9jup',
                  apiId: 'eaa737be-d5af-47ce-967a-65395a62b648'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mladenmadarevic/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-5txd9jup.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
