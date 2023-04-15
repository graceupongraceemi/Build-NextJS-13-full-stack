import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/ui/Tabs';
import { FC } from 'react';
import SimpleBar from 'simplebar-react';

const DocumentationTabs: FC = ({}) => {
  return (
    <Tabs defaultValue='nodejs' className='max-w-2xl w-full'>
      <TabsList>
        <TabsTrigger value='nodejs'>NodeJS</TabsTrigger>
        <TabsTrigger value='python'>Python</TabsTrigger>
      </TabsList>
      <TabsContent value='nodejs'>
        <SimpleBar></SimpleBar>
      </TabsContent>
      <TabsContent value='python'></TabsContent>
    </Tabs>
  );
};

export default DocumentationTabs;
