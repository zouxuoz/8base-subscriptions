import React from 'react';
import { gql } from '8base-react-sdk';
import { useSubscription } from 'react-apollo';

const APPLICATION_SUBSCRIPTION = gql`
  subscription {
    Apps {
      mutation
      node {
        id
        authClientId
        authDomain
        workspaceId
        mode
        pages {
          items {
            id
            tableId
            path
            icon
          }
        }
      }
    }
  }
`;

export const Main = () => {
  const res = useSubscription(APPLICATION_SUBSCRIPTION);

  console.log(res);

  return <div>Main</div>;
};
