import React, { Component } from 'react';

import LinksListFilters from './LinksListFilters';
import LinksList from './LinksList';
import PrivateHeader from './PrivateHeader';
import AddLink from './AddLink';

export default () => {
  return (
    <div>
      <PrivateHeader title='Your Links' />
      <div className="page-content">
        <LinksListFilters/>
        <AddLink />
        <LinksList />
      </div>
    </div>
  );
}
