// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { YolkenTest6 } from '../client';

export abstract class APIResource {
  protected _client: YolkenTest6;

  constructor(client: YolkenTest6) {
    this._client = client;
  }
}
