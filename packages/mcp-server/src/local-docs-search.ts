// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MiniSearch from 'minisearch';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { getLogger } from './logger';

type PerLanguageData = {
  method?: string;
  example?: string;
};

type MethodEntry = {
  name: string;
  endpoint: string;
  httpMethod: string;
  summary: string;
  description: string;
  stainlessPath: string;
  qualified: string;
  params?: string[];
  response?: string;
  markdown?: string;
  perLanguage?: Record<string, PerLanguageData>;
};

type ProseChunk = {
  content: string;
  tag: string;
  sectionContext?: string;
  source?: string;
};

type MiniSearchDocument = {
  id: string;
  kind: 'http_method' | 'prose';
  name?: string;
  endpoint?: string;
  summary?: string;
  description?: string;
  qualified?: string;
  stainlessPath?: string;
  content?: string;
  sectionContext?: string;
  _original: Record<string, unknown>;
};

type SearchResult = {
  results: (string | Record<string, unknown>)[];
};

const EMBEDDED_METHODS: MethodEntry[] = [
  {
    name: 'update',
    endpoint: '/pet',
    httpMethod: 'put',
    summary: 'Update an existing pet',
    description: 'Update an existing pet by Id',
    stainlessPath: '(resource) pets > (method) update',
    qualified: 'client.pets.update',
    params: [
      'name: string;',
      'photoUrls: string[];',
      'id?: number;',
      'category?: { id?: number; name?: string; };',
      "status?: 'available' | 'pending' | 'sold';",
      'tags?: { id?: number; name?: string; }[];',
    ],
    response:
      "{ name: string; photoUrls: string[]; id?: number; category?: { id?: number; name?: string; }; status?: 'available' | 'pending' | 'sold'; tags?: { id?: number; name?: string; }[]; }",
    markdown:
      "## update\n\n`client.pets.update(name: string, photoUrls: string[], id?: number, category?: { id?: number; name?: string; }, status?: 'available' | 'pending' | 'sold', tags?: { id?: number; name?: string; }[]): { name: string; photoUrls: string[]; id?: number; category?: category; status?: 'available' | 'pending' | 'sold'; tags?: object[]; }`\n\n**put** `/pet`\n\nUpdate an existing pet by Id\n\n### Parameters\n\n- `name: string`\n\n- `photoUrls: string[]`\n\n- `id?: number`\n\n- `category?: { id?: number; name?: string; }`\n  - `id?: number`\n  - `name?: string`\n\n- `status?: 'available' | 'pending' | 'sold'`\n  pet status in the store\n\n- `tags?: { id?: number; name?: string; }[]`\n\n### Returns\n\n- `{ name: string; photoUrls: string[]; id?: number; category?: { id?: number; name?: string; }; status?: 'available' | 'pending' | 'sold'; tags?: { id?: number; name?: string; }[]; }`\n\n  - `name: string`\n  - `photoUrls: string[]`\n  - `id?: number`\n  - `category?: { id?: number; name?: string; }`\n  - `status?: 'available' | 'pending' | 'sold'`\n  - `tags?: { id?: number; name?: string; }[]`\n\n### Example\n\n```typescript\nimport YolkenTest6 from 'yolken-test6';\n\nconst client = new YolkenTest6();\n\nconst pet = await client.pets.update({ name: 'doggie', photoUrls: ['string'] });\n\nconsole.log(pet);\n```",
    perLanguage: {
      go: {
        method: 'client.Pets.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/yolken-test6-go"\n\t"github.com/stainless-sdks/yolken-test6-go/option"\n)\n\nfunc main() {\n\tclient := yolkentest6.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpet, err := client.Pets.Update(context.TODO(), yolkentest6.PetUpdateParams{\n\t\tPet: yolkentest6.PetParam{\n\t\t\tName:      "doggie",\n\t\t\tPhotoURLs: []string{"string"},\n\t\t},\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", pet.ID)\n}\n',
      },
      http: {
        example:
          'curl https://petstore3.swagger.io/api/v3/pet \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H "api_key: $PETSTORE_API_KEY" \\\n    -d \'{\n          "name": "doggie",\n          "photoUrls": [\n            "string"\n          ],\n          "id": 10\n        }\'',
      },
      java: {
        method: 'pets().update',
        example:
          'package com.yolken.api.example;\n\nimport com.yolken.api.client.YolkenTest6Client;\nimport com.yolken.api.client.okhttp.YolkenTest6OkHttpClient;\nimport com.yolken.api.models.pets.Pet;\nimport com.yolken.api.models.pets.PetUpdateParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        YolkenTest6Client client = YolkenTest6OkHttpClient.fromEnv();\n\n        Pet params = Pet.builder()\n            .name("doggie")\n            .addPhotoUrl("string")\n            .build();\n        Pet pet = client.pets().update(params);\n    }\n}',
      },
      python: {
        method: 'pets.update',
        example:
          'import os\nfrom yolken_test6 import YolkenTest6\n\nclient = YolkenTest6(\n    api_key=os.environ.get("PETSTORE_API_KEY"),  # This is the default and can be omitted\n)\npet = client.pets.update(\n    name="doggie",\n    photo_urls=["string"],\n)\nprint(pet.id)',
      },
      typescript: {
        method: 'client.pets.update',
        example:
          "import YolkenTest6 from 'yolken-test6';\n\nconst client = new YolkenTest6({\n  apiKey: process.env['PETSTORE_API_KEY'], // This is the default and can be omitted\n});\n\nconst pet = await client.pets.update({ name: 'doggie', photoUrls: ['string'] });\n\nconsole.log(pet.id);",
      },
    },
  },
  {
    name: 'create',
    endpoint: '/pet',
    httpMethod: 'post',
    summary: 'Add a new pet to the store',
    description: 'Add a new pet to the store',
    stainlessPath: '(resource) pets > (method) create',
    qualified: 'client.pets.create',
    params: [
      'name: string;',
      'photoUrls: string[];',
      'id?: number;',
      'category?: { id?: number; name?: string; };',
      "status?: 'available' | 'pending' | 'sold';",
      'tags?: { id?: number; name?: string; }[];',
    ],
    response:
      "{ name: string; photoUrls: string[]; id?: number; category?: { id?: number; name?: string; }; status?: 'available' | 'pending' | 'sold'; tags?: { id?: number; name?: string; }[]; }",
    markdown:
      "## create\n\n`client.pets.create(name: string, photoUrls: string[], id?: number, category?: { id?: number; name?: string; }, status?: 'available' | 'pending' | 'sold', tags?: { id?: number; name?: string; }[]): { name: string; photoUrls: string[]; id?: number; category?: category; status?: 'available' | 'pending' | 'sold'; tags?: object[]; }`\n\n**post** `/pet`\n\nAdd a new pet to the store\n\n### Parameters\n\n- `name: string`\n\n- `photoUrls: string[]`\n\n- `id?: number`\n\n- `category?: { id?: number; name?: string; }`\n  - `id?: number`\n  - `name?: string`\n\n- `status?: 'available' | 'pending' | 'sold'`\n  pet status in the store\n\n- `tags?: { id?: number; name?: string; }[]`\n\n### Returns\n\n- `{ name: string; photoUrls: string[]; id?: number; category?: { id?: number; name?: string; }; status?: 'available' | 'pending' | 'sold'; tags?: { id?: number; name?: string; }[]; }`\n\n  - `name: string`\n  - `photoUrls: string[]`\n  - `id?: number`\n  - `category?: { id?: number; name?: string; }`\n  - `status?: 'available' | 'pending' | 'sold'`\n  - `tags?: { id?: number; name?: string; }[]`\n\n### Example\n\n```typescript\nimport YolkenTest6 from 'yolken-test6';\n\nconst client = new YolkenTest6();\n\nconst pet = await client.pets.create({ name: 'doggie', photoUrls: ['string'] });\n\nconsole.log(pet);\n```",
    perLanguage: {
      go: {
        method: 'client.Pets.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/yolken-test6-go"\n\t"github.com/stainless-sdks/yolken-test6-go/option"\n)\n\nfunc main() {\n\tclient := yolkentest6.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpet, err := client.Pets.New(context.TODO(), yolkentest6.PetNewParams{\n\t\tPet: yolkentest6.PetParam{\n\t\t\tName:      "doggie",\n\t\t\tPhotoURLs: []string{"string"},\n\t\t},\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", pet.ID)\n}\n',
      },
      http: {
        example:
          'curl https://petstore3.swagger.io/api/v3/pet \\\n    -H \'Content-Type: application/json\' \\\n    -H "api_key: $PETSTORE_API_KEY" \\\n    -d \'{\n          "name": "doggie",\n          "photoUrls": [\n            "string"\n          ],\n          "id": 10\n        }\'',
      },
      java: {
        method: 'pets().create',
        example:
          'package com.yolken.api.example;\n\nimport com.yolken.api.client.YolkenTest6Client;\nimport com.yolken.api.client.okhttp.YolkenTest6OkHttpClient;\nimport com.yolken.api.models.pets.Pet;\nimport com.yolken.api.models.pets.PetCreateParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        YolkenTest6Client client = YolkenTest6OkHttpClient.fromEnv();\n\n        Pet params = Pet.builder()\n            .name("doggie")\n            .addPhotoUrl("string")\n            .build();\n        Pet pet = client.pets().create(params);\n    }\n}',
      },
      python: {
        method: 'pets.create',
        example:
          'import os\nfrom yolken_test6 import YolkenTest6\n\nclient = YolkenTest6(\n    api_key=os.environ.get("PETSTORE_API_KEY"),  # This is the default and can be omitted\n)\npet = client.pets.create(\n    name="doggie",\n    photo_urls=["string"],\n)\nprint(pet.id)',
      },
      typescript: {
        method: 'client.pets.create',
        example:
          "import YolkenTest6 from 'yolken-test6';\n\nconst client = new YolkenTest6({\n  apiKey: process.env['PETSTORE_API_KEY'], // This is the default and can be omitted\n});\n\nconst pet = await client.pets.create({ name: 'doggie', photoUrls: ['string'] });\n\nconsole.log(pet.id);",
      },
    },
  },
  {
    name: 'find_by_status',
    endpoint: '/pet/findByStatus',
    httpMethod: 'get',
    summary: 'Finds Pets by status',
    description: 'Multiple status values can be provided with comma separated strings',
    stainlessPath: '(resource) pets > (method) find_by_status',
    qualified: 'client.pets.findByStatus',
    params: ["status?: 'available' | 'pending' | 'sold';"],
    response:
      "{ name: string; photoUrls: string[]; id?: number; category?: object; status?: 'available' | 'pending' | 'sold'; tags?: { id?: number; name?: string; }[]; }[]",
    markdown:
      "## find_by_status\n\n`client.pets.findByStatus(status?: 'available' | 'pending' | 'sold'): object[]`\n\n**get** `/pet/findByStatus`\n\nMultiple status values can be provided with comma separated strings\n\n### Parameters\n\n- `status?: 'available' | 'pending' | 'sold'`\n  Status values that need to be considered for filter\n\n### Returns\n\n- `{ name: string; photoUrls: string[]; id?: number; category?: object; status?: 'available' | 'pending' | 'sold'; tags?: { id?: number; name?: string; }[]; }[]`\n\n### Example\n\n```typescript\nimport YolkenTest6 from 'yolken-test6';\n\nconst client = new YolkenTest6();\n\nconst pets = await client.pets.findByStatus();\n\nconsole.log(pets);\n```",
    perLanguage: {
      go: {
        method: 'client.Pets.FindByStatus',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/yolken-test6-go"\n\t"github.com/stainless-sdks/yolken-test6-go/option"\n)\n\nfunc main() {\n\tclient := yolkentest6.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpets, err := client.Pets.FindByStatus(context.TODO(), yolkentest6.PetFindByStatusParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", pets)\n}\n',
      },
      http: {
        example:
          'curl https://petstore3.swagger.io/api/v3/pet/findByStatus \\\n    -H "api_key: $PETSTORE_API_KEY"',
      },
      java: {
        method: 'pets().findByStatus',
        example:
          'package com.yolken.api.example;\n\nimport com.yolken.api.client.YolkenTest6Client;\nimport com.yolken.api.client.okhttp.YolkenTest6OkHttpClient;\nimport com.yolken.api.models.pets.Pet;\nimport com.yolken.api.models.pets.PetFindByStatusParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        YolkenTest6Client client = YolkenTest6OkHttpClient.fromEnv();\n\n        List<Pet> pets = client.pets().findByStatus();\n    }\n}',
      },
      python: {
        method: 'pets.find_by_status',
        example:
          'import os\nfrom yolken_test6 import YolkenTest6\n\nclient = YolkenTest6(\n    api_key=os.environ.get("PETSTORE_API_KEY"),  # This is the default and can be omitted\n)\npets = client.pets.find_by_status()\nprint(pets)',
      },
      typescript: {
        method: 'client.pets.findByStatus',
        example:
          "import YolkenTest6 from 'yolken-test6';\n\nconst client = new YolkenTest6({\n  apiKey: process.env['PETSTORE_API_KEY'], // This is the default and can be omitted\n});\n\nconst pets = await client.pets.findByStatus();\n\nconsole.log(pets);",
      },
    },
  },
  {
    name: 'find_by_tags',
    endpoint: '/pet/findByTags',
    httpMethod: 'get',
    summary: 'Finds Pets by tags',
    description:
      'Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.',
    stainlessPath: '(resource) pets > (method) find_by_tags',
    qualified: 'client.pets.findByTags',
    params: ['tags?: string[];'],
    response:
      "{ name: string; photoUrls: string[]; id?: number; category?: object; status?: 'available' | 'pending' | 'sold'; tags?: { id?: number; name?: string; }[]; }[]",
    markdown:
      "## find_by_tags\n\n`client.pets.findByTags(tags?: string[]): object[]`\n\n**get** `/pet/findByTags`\n\nMultiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.\n\n### Parameters\n\n- `tags?: string[]`\n  Tags to filter by\n\n### Returns\n\n- `{ name: string; photoUrls: string[]; id?: number; category?: object; status?: 'available' | 'pending' | 'sold'; tags?: { id?: number; name?: string; }[]; }[]`\n\n### Example\n\n```typescript\nimport YolkenTest6 from 'yolken-test6';\n\nconst client = new YolkenTest6();\n\nconst pets = await client.pets.findByTags();\n\nconsole.log(pets);\n```",
    perLanguage: {
      go: {
        method: 'client.Pets.FindByTags',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/yolken-test6-go"\n\t"github.com/stainless-sdks/yolken-test6-go/option"\n)\n\nfunc main() {\n\tclient := yolkentest6.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpets, err := client.Pets.FindByTags(context.TODO(), yolkentest6.PetFindByTagsParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", pets)\n}\n',
      },
      http: {
        example:
          'curl https://petstore3.swagger.io/api/v3/pet/findByTags \\\n    -H "api_key: $PETSTORE_API_KEY"',
      },
      java: {
        method: 'pets().findByTags',
        example:
          'package com.yolken.api.example;\n\nimport com.yolken.api.client.YolkenTest6Client;\nimport com.yolken.api.client.okhttp.YolkenTest6OkHttpClient;\nimport com.yolken.api.models.pets.Pet;\nimport com.yolken.api.models.pets.PetFindByTagsParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        YolkenTest6Client client = YolkenTest6OkHttpClient.fromEnv();\n\n        List<Pet> pets = client.pets().findByTags();\n    }\n}',
      },
      python: {
        method: 'pets.find_by_tags',
        example:
          'import os\nfrom yolken_test6 import YolkenTest6\n\nclient = YolkenTest6(\n    api_key=os.environ.get("PETSTORE_API_KEY"),  # This is the default and can be omitted\n)\npets = client.pets.find_by_tags()\nprint(pets)',
      },
      typescript: {
        method: 'client.pets.findByTags',
        example:
          "import YolkenTest6 from 'yolken-test6';\n\nconst client = new YolkenTest6({\n  apiKey: process.env['PETSTORE_API_KEY'], // This is the default and can be omitted\n});\n\nconst pets = await client.pets.findByTags();\n\nconsole.log(pets);",
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/pet/{petId}',
    httpMethod: 'get',
    summary: 'Find pet by ID',
    description: 'Returns a single pet',
    stainlessPath: '(resource) pets > (method) retrieve',
    qualified: 'client.pets.retrieve',
    params: ['petId: number;'],
    response:
      "{ name: string; photoUrls: string[]; id?: number; category?: { id?: number; name?: string; }; status?: 'available' | 'pending' | 'sold'; tags?: { id?: number; name?: string; }[]; }",
    markdown:
      "## retrieve\n\n`client.pets.retrieve(petId: number): { name: string; photoUrls: string[]; id?: number; category?: category; status?: 'available' | 'pending' | 'sold'; tags?: object[]; }`\n\n**get** `/pet/{petId}`\n\nReturns a single pet\n\n### Parameters\n\n- `petId: number`\n\n### Returns\n\n- `{ name: string; photoUrls: string[]; id?: number; category?: { id?: number; name?: string; }; status?: 'available' | 'pending' | 'sold'; tags?: { id?: number; name?: string; }[]; }`\n\n  - `name: string`\n  - `photoUrls: string[]`\n  - `id?: number`\n  - `category?: { id?: number; name?: string; }`\n  - `status?: 'available' | 'pending' | 'sold'`\n  - `tags?: { id?: number; name?: string; }[]`\n\n### Example\n\n```typescript\nimport YolkenTest6 from 'yolken-test6';\n\nconst client = new YolkenTest6();\n\nconst pet = await client.pets.retrieve(0);\n\nconsole.log(pet);\n```",
    perLanguage: {
      go: {
        method: 'client.Pets.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/yolken-test6-go"\n\t"github.com/stainless-sdks/yolken-test6-go/option"\n)\n\nfunc main() {\n\tclient := yolkentest6.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpet, err := client.Pets.Get(context.TODO(), 0)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", pet.ID)\n}\n',
      },
      http: {
        example:
          'curl https://petstore3.swagger.io/api/v3/pet/$PET_ID \\\n    -H "api_key: $PETSTORE_API_KEY"',
      },
      java: {
        method: 'pets().retrieve',
        example:
          'package com.yolken.api.example;\n\nimport com.yolken.api.client.YolkenTest6Client;\nimport com.yolken.api.client.okhttp.YolkenTest6OkHttpClient;\nimport com.yolken.api.models.pets.Pet;\nimport com.yolken.api.models.pets.PetRetrieveParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        YolkenTest6Client client = YolkenTest6OkHttpClient.fromEnv();\n\n        Pet pet = client.pets().retrieve(0L);\n    }\n}',
      },
      python: {
        method: 'pets.retrieve',
        example:
          'import os\nfrom yolken_test6 import YolkenTest6\n\nclient = YolkenTest6(\n    api_key=os.environ.get("PETSTORE_API_KEY"),  # This is the default and can be omitted\n)\npet = client.pets.retrieve(\n    0,\n)\nprint(pet.id)',
      },
      typescript: {
        method: 'client.pets.retrieve',
        example:
          "import YolkenTest6 from 'yolken-test6';\n\nconst client = new YolkenTest6({\n  apiKey: process.env['PETSTORE_API_KEY'], // This is the default and can be omitted\n});\n\nconst pet = await client.pets.retrieve(0);\n\nconsole.log(pet.id);",
      },
    },
  },
  {
    name: 'update_by_id',
    endpoint: '/pet/{petId}',
    httpMethod: 'post',
    summary: 'Updates a pet in the store with form data',
    description: 'Updates a pet in the store with form data',
    stainlessPath: '(resource) pets > (method) update_by_id',
    qualified: 'client.pets.updateByID',
    params: ['petId: number;', 'name?: string;', 'status?: string;'],
    markdown:
      "## update_by_id\n\n`client.pets.updateByID(petId: number, name?: string, status?: string): void`\n\n**post** `/pet/{petId}`\n\nUpdates a pet in the store with form data\n\n### Parameters\n\n- `petId: number`\n\n- `name?: string`\n  Name of pet that needs to be updated\n\n- `status?: string`\n  Status of pet that needs to be updated\n\n### Example\n\n```typescript\nimport YolkenTest6 from 'yolken-test6';\n\nconst client = new YolkenTest6();\n\nawait client.pets.updateByID(0)\n```",
    perLanguage: {
      go: {
        method: 'client.Pets.UpdateByID',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/stainless-sdks/yolken-test6-go"\n\t"github.com/stainless-sdks/yolken-test6-go/option"\n)\n\nfunc main() {\n\tclient := yolkentest6.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\terr := client.Pets.UpdateByID(\n\t\tcontext.TODO(),\n\t\t0,\n\t\tyolkentest6.PetUpdateByIDParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      http: {
        example:
          'curl https://petstore3.swagger.io/api/v3/pet/$PET_ID \\\n    -X POST \\\n    -H "api_key: $PETSTORE_API_KEY"',
      },
      java: {
        method: 'pets().updateById',
        example:
          'package com.yolken.api.example;\n\nimport com.yolken.api.client.YolkenTest6Client;\nimport com.yolken.api.client.okhttp.YolkenTest6OkHttpClient;\nimport com.yolken.api.models.pets.PetUpdateByIdParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        YolkenTest6Client client = YolkenTest6OkHttpClient.fromEnv();\n\n        client.pets().updateById(0L);\n    }\n}',
      },
      python: {
        method: 'pets.update_by_id',
        example:
          'import os\nfrom yolken_test6 import YolkenTest6\n\nclient = YolkenTest6(\n    api_key=os.environ.get("PETSTORE_API_KEY"),  # This is the default and can be omitted\n)\nclient.pets.update_by_id(\n    pet_id=0,\n)',
      },
      typescript: {
        method: 'client.pets.updateByID',
        example:
          "import YolkenTest6 from 'yolken-test6';\n\nconst client = new YolkenTest6({\n  apiKey: process.env['PETSTORE_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.pets.updateByID(0);",
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/pet/{petId}',
    httpMethod: 'delete',
    summary: 'Deletes a pet',
    description: 'delete a pet',
    stainlessPath: '(resource) pets > (method) delete',
    qualified: 'client.pets.delete',
    params: ['petId: number;'],
    markdown:
      "## delete\n\n`client.pets.delete(petId: number): void`\n\n**delete** `/pet/{petId}`\n\ndelete a pet\n\n### Parameters\n\n- `petId: number`\n\n### Example\n\n```typescript\nimport YolkenTest6 from 'yolken-test6';\n\nconst client = new YolkenTest6();\n\nawait client.pets.delete(0)\n```",
    perLanguage: {
      go: {
        method: 'client.Pets.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/stainless-sdks/yolken-test6-go"\n\t"github.com/stainless-sdks/yolken-test6-go/option"\n)\n\nfunc main() {\n\tclient := yolkentest6.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\terr := client.Pets.Delete(context.TODO(), 0)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      http: {
        example:
          'curl https://petstore3.swagger.io/api/v3/pet/$PET_ID \\\n    -X DELETE \\\n    -H "api_key: $PETSTORE_API_KEY"',
      },
      java: {
        method: 'pets().delete',
        example:
          'package com.yolken.api.example;\n\nimport com.yolken.api.client.YolkenTest6Client;\nimport com.yolken.api.client.okhttp.YolkenTest6OkHttpClient;\nimport com.yolken.api.models.pets.PetDeleteParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        YolkenTest6Client client = YolkenTest6OkHttpClient.fromEnv();\n\n        client.pets().delete(0L);\n    }\n}',
      },
      python: {
        method: 'pets.delete',
        example:
          'import os\nfrom yolken_test6 import YolkenTest6\n\nclient = YolkenTest6(\n    api_key=os.environ.get("PETSTORE_API_KEY"),  # This is the default and can be omitted\n)\nclient.pets.delete(\n    0,\n)',
      },
      typescript: {
        method: 'client.pets.delete',
        example:
          "import YolkenTest6 from 'yolken-test6';\n\nconst client = new YolkenTest6({\n  apiKey: process.env['PETSTORE_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.pets.delete(0);",
      },
    },
  },
  {
    name: 'upload_image',
    endpoint: '/pet/{petId}/uploadImage',
    httpMethod: 'post',
    summary: 'uploads an image',
    description: 'uploads an image',
    stainlessPath: '(resource) pets > (method) upload_image',
    qualified: 'client.pets.uploadImage',
    params: ['petId: number;', 'image: string;', 'additionalMetadata?: string;'],
    response: '{ code?: number; message?: string; type?: string; }',
    markdown:
      "## upload_image\n\n`client.pets.uploadImage(petId: number, image: string, additionalMetadata?: string): { code?: number; message?: string; type?: string; }`\n\n**post** `/pet/{petId}/uploadImage`\n\nuploads an image\n\n### Parameters\n\n- `petId: number`\n\n- `image: string`\n\n- `additionalMetadata?: string`\n  Additional Metadata\n\n### Returns\n\n- `{ code?: number; message?: string; type?: string; }`\n\n  - `code?: number`\n  - `message?: string`\n  - `type?: string`\n\n### Example\n\n```typescript\nimport YolkenTest6 from 'yolken-test6';\n\nconst client = new YolkenTest6();\n\nconst response = await client.pets.uploadImage(0, fs.createReadStream('path/to/file'));\n\nconsole.log(response);\n```",
    perLanguage: {
      go: {
        method: 'client.Pets.UploadImage',
        example:
          'package main\n\nimport (\n\t"bytes"\n\t"context"\n\t"fmt"\n\t"io"\n\n\t"github.com/stainless-sdks/yolken-test6-go"\n\t"github.com/stainless-sdks/yolken-test6-go/option"\n)\n\nfunc main() {\n\tclient := yolkentest6.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Pets.UploadImage(\n\t\tcontext.TODO(),\n\t\t0,\n\t\tio.Reader(bytes.NewBuffer([]byte("Example data"))),\n\t\tyolkentest6.PetUploadImageParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Code)\n}\n',
      },
      http: {
        example:
          "curl https://petstore3.swagger.io/api/v3/pet/$PET_ID/uploadImage \\\n    -H 'Content-Type: application/octet-stream' \\\n    -H \"api_key: $PETSTORE_API_KEY\" \\\n    -F 'image=@/path/to/image'",
      },
      java: {
        method: 'pets().uploadImage',
        example:
          'package com.yolken.api.example;\n\nimport com.yolken.api.client.YolkenTest6Client;\nimport com.yolken.api.client.okhttp.YolkenTest6OkHttpClient;\nimport com.yolken.api.models.pets.PetUploadImageParams;\nimport com.yolken.api.models.pets.PetUploadImageResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        YolkenTest6Client client = YolkenTest6OkHttpClient.fromEnv();\n\n        PetUploadImageResponse response = client.pets().uploadImage(\n          0L, "Example data"\n        );\n    }\n}',
      },
      python: {
        method: 'pets.upload_image',
        example:
          'import os\nfrom yolken_test6 import YolkenTest6\n\nclient = YolkenTest6(\n    api_key=os.environ.get("PETSTORE_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.pets.upload_image(\n    pet_id=0,\n    image=b"Example data",\n)\nprint(response.code)',
      },
      typescript: {
        method: 'client.pets.uploadImage',
        example:
          "import YolkenTest6 from 'yolken-test6';\n\nconst client = new YolkenTest6({\n  apiKey: process.env['PETSTORE_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.pets.uploadImage(0, fs.createReadStream('path/to/file'));\n\nconsole.log(response.code);",
      },
    },
  },
  {
    name: 'list_inventory',
    endpoint: '/store/inventory',
    httpMethod: 'get',
    summary: 'Returns pet inventories by status',
    description: 'Returns a map of status codes to quantities',
    stainlessPath: '(resource) store > (method) list_inventory',
    qualified: 'client.store.listInventory',
    response: 'object',
    markdown:
      "## list_inventory\n\n`client.store.listInventory(): object`\n\n**get** `/store/inventory`\n\nReturns a map of status codes to quantities\n\n### Returns\n\n- `object`\n\n### Example\n\n```typescript\nimport YolkenTest6 from 'yolken-test6';\n\nconst client = new YolkenTest6();\n\nconst response = await client.store.listInventory();\n\nconsole.log(response);\n```",
    perLanguage: {
      go: {
        method: 'client.Store.ListInventory',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/yolken-test6-go"\n\t"github.com/stainless-sdks/yolken-test6-go/option"\n)\n\nfunc main() {\n\tclient := yolkentest6.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Store.ListInventory(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response)\n}\n',
      },
      http: {
        example:
          'curl https://petstore3.swagger.io/api/v3/store/inventory \\\n    -H "api_key: $PETSTORE_API_KEY"',
      },
      java: {
        method: 'store().listInventory',
        example:
          'package com.yolken.api.example;\n\nimport com.yolken.api.client.YolkenTest6Client;\nimport com.yolken.api.client.okhttp.YolkenTest6OkHttpClient;\nimport com.yolken.api.models.store.StoreListInventoryParams;\nimport com.yolken.api.models.store.StoreListInventoryResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        YolkenTest6Client client = YolkenTest6OkHttpClient.fromEnv();\n\n        StoreListInventoryResponse response = client.store().listInventory();\n    }\n}',
      },
      python: {
        method: 'store.list_inventory',
        example:
          'import os\nfrom yolken_test6 import YolkenTest6\n\nclient = YolkenTest6(\n    api_key=os.environ.get("PETSTORE_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.store.list_inventory()\nprint(response)',
      },
      typescript: {
        method: 'client.store.listInventory',
        example:
          "import YolkenTest6 from 'yolken-test6';\n\nconst client = new YolkenTest6({\n  apiKey: process.env['PETSTORE_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.store.listInventory();\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'create',
    endpoint: '/store/order',
    httpMethod: 'post',
    summary: 'Place an order for a pet',
    description: 'Place a new order in the store',
    stainlessPath: '(resource) store.orders > (method) create',
    qualified: 'client.store.orders.create',
    params: [
      'id?: number;',
      'complete?: boolean;',
      'petId?: number;',
      'quantity?: number;',
      'shipDate?: string;',
      "status?: 'placed' | 'approved' | 'delivered';",
    ],
    response:
      "{ id?: number; complete?: boolean; petId?: number; quantity?: number; shipDate?: string; status?: 'placed' | 'approved' | 'delivered'; }",
    markdown:
      "## create\n\n`client.store.orders.create(id?: number, complete?: boolean, petId?: number, quantity?: number, shipDate?: string, status?: 'placed' | 'approved' | 'delivered'): { id?: number; complete?: boolean; petId?: number; quantity?: number; shipDate?: string; status?: 'placed' | 'approved' | 'delivered'; }`\n\n**post** `/store/order`\n\nPlace a new order in the store\n\n### Parameters\n\n- `id?: number`\n\n- `complete?: boolean`\n\n- `petId?: number`\n\n- `quantity?: number`\n\n- `shipDate?: string`\n\n- `status?: 'placed' | 'approved' | 'delivered'`\n  Order Status\n\n### Returns\n\n- `{ id?: number; complete?: boolean; petId?: number; quantity?: number; shipDate?: string; status?: 'placed' | 'approved' | 'delivered'; }`\n\n  - `id?: number`\n  - `complete?: boolean`\n  - `petId?: number`\n  - `quantity?: number`\n  - `shipDate?: string`\n  - `status?: 'placed' | 'approved' | 'delivered'`\n\n### Example\n\n```typescript\nimport YolkenTest6 from 'yolken-test6';\n\nconst client = new YolkenTest6();\n\nconst order = await client.store.orders.create();\n\nconsole.log(order);\n```",
    perLanguage: {
      go: {
        method: 'client.Store.Orders.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/yolken-test6-go"\n\t"github.com/stainless-sdks/yolken-test6-go/option"\n)\n\nfunc main() {\n\tclient := yolkentest6.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\torder, err := client.Store.Orders.New(context.TODO(), yolkentest6.StoreOrderNewParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", order.ID)\n}\n',
      },
      http: {
        example:
          'curl https://petstore3.swagger.io/api/v3/store/order \\\n    -X POST \\\n    -H "api_key: $PETSTORE_API_KEY"',
      },
      java: {
        method: 'store().orders().create',
        example:
          'package com.yolken.api.example;\n\nimport com.yolken.api.client.YolkenTest6Client;\nimport com.yolken.api.client.okhttp.YolkenTest6OkHttpClient;\nimport com.yolken.api.models.Order;\nimport com.yolken.api.models.store.orders.OrderCreateParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        YolkenTest6Client client = YolkenTest6OkHttpClient.fromEnv();\n\n        Order order = client.store().orders().create();\n    }\n}',
      },
      python: {
        method: 'store.orders.create',
        example:
          'import os\nfrom yolken_test6 import YolkenTest6\n\nclient = YolkenTest6(\n    api_key=os.environ.get("PETSTORE_API_KEY"),  # This is the default and can be omitted\n)\norder = client.store.orders.create()\nprint(order.id)',
      },
      typescript: {
        method: 'client.store.orders.create',
        example:
          "import YolkenTest6 from 'yolken-test6';\n\nconst client = new YolkenTest6({\n  apiKey: process.env['PETSTORE_API_KEY'], // This is the default and can be omitted\n});\n\nconst order = await client.store.orders.create();\n\nconsole.log(order.id);",
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/store/order/{orderId}',
    httpMethod: 'get',
    summary: 'Find purchase order by ID',
    description:
      'For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions.',
    stainlessPath: '(resource) store.orders > (method) retrieve',
    qualified: 'client.store.orders.retrieve',
    params: ['orderId: number;'],
    response:
      "{ id?: number; complete?: boolean; petId?: number; quantity?: number; shipDate?: string; status?: 'placed' | 'approved' | 'delivered'; }",
    markdown:
      "## retrieve\n\n`client.store.orders.retrieve(orderId: number): { id?: number; complete?: boolean; petId?: number; quantity?: number; shipDate?: string; status?: 'placed' | 'approved' | 'delivered'; }`\n\n**get** `/store/order/{orderId}`\n\nFor valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions.\n\n### Parameters\n\n- `orderId: number`\n\n### Returns\n\n- `{ id?: number; complete?: boolean; petId?: number; quantity?: number; shipDate?: string; status?: 'placed' | 'approved' | 'delivered'; }`\n\n  - `id?: number`\n  - `complete?: boolean`\n  - `petId?: number`\n  - `quantity?: number`\n  - `shipDate?: string`\n  - `status?: 'placed' | 'approved' | 'delivered'`\n\n### Example\n\n```typescript\nimport YolkenTest6 from 'yolken-test6';\n\nconst client = new YolkenTest6();\n\nconst order = await client.store.orders.retrieve(0);\n\nconsole.log(order);\n```",
    perLanguage: {
      go: {
        method: 'client.Store.Orders.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/yolken-test6-go"\n\t"github.com/stainless-sdks/yolken-test6-go/option"\n)\n\nfunc main() {\n\tclient := yolkentest6.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\torder, err := client.Store.Orders.Get(context.TODO(), 0)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", order.ID)\n}\n',
      },
      http: {
        example:
          'curl https://petstore3.swagger.io/api/v3/store/order/$ORDER_ID \\\n    -H "api_key: $PETSTORE_API_KEY"',
      },
      java: {
        method: 'store().orders().retrieve',
        example:
          'package com.yolken.api.example;\n\nimport com.yolken.api.client.YolkenTest6Client;\nimport com.yolken.api.client.okhttp.YolkenTest6OkHttpClient;\nimport com.yolken.api.models.Order;\nimport com.yolken.api.models.store.orders.OrderRetrieveParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        YolkenTest6Client client = YolkenTest6OkHttpClient.fromEnv();\n\n        Order order = client.store().orders().retrieve(0L);\n    }\n}',
      },
      python: {
        method: 'store.orders.retrieve',
        example:
          'import os\nfrom yolken_test6 import YolkenTest6\n\nclient = YolkenTest6(\n    api_key=os.environ.get("PETSTORE_API_KEY"),  # This is the default and can be omitted\n)\norder = client.store.orders.retrieve(\n    0,\n)\nprint(order.id)',
      },
      typescript: {
        method: 'client.store.orders.retrieve',
        example:
          "import YolkenTest6 from 'yolken-test6';\n\nconst client = new YolkenTest6({\n  apiKey: process.env['PETSTORE_API_KEY'], // This is the default and can be omitted\n});\n\nconst order = await client.store.orders.retrieve(0);\n\nconsole.log(order.id);",
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/store/order/{orderId}',
    httpMethod: 'delete',
    summary: 'Delete purchase order by ID',
    description:
      'For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors',
    stainlessPath: '(resource) store.orders > (method) delete',
    qualified: 'client.store.orders.delete',
    params: ['orderId: number;'],
    markdown:
      "## delete\n\n`client.store.orders.delete(orderId: number): void`\n\n**delete** `/store/order/{orderId}`\n\nFor valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors\n\n### Parameters\n\n- `orderId: number`\n\n### Example\n\n```typescript\nimport YolkenTest6 from 'yolken-test6';\n\nconst client = new YolkenTest6();\n\nawait client.store.orders.delete(0)\n```",
    perLanguage: {
      go: {
        method: 'client.Store.Orders.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/stainless-sdks/yolken-test6-go"\n\t"github.com/stainless-sdks/yolken-test6-go/option"\n)\n\nfunc main() {\n\tclient := yolkentest6.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\terr := client.Store.Orders.Delete(context.TODO(), 0)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      http: {
        example:
          'curl https://petstore3.swagger.io/api/v3/store/order/$ORDER_ID \\\n    -X DELETE \\\n    -H "api_key: $PETSTORE_API_KEY"',
      },
      java: {
        method: 'store().orders().delete',
        example:
          'package com.yolken.api.example;\n\nimport com.yolken.api.client.YolkenTest6Client;\nimport com.yolken.api.client.okhttp.YolkenTest6OkHttpClient;\nimport com.yolken.api.models.store.orders.OrderDeleteParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        YolkenTest6Client client = YolkenTest6OkHttpClient.fromEnv();\n\n        client.store().orders().delete(0L);\n    }\n}',
      },
      python: {
        method: 'store.orders.delete',
        example:
          'import os\nfrom yolken_test6 import YolkenTest6\n\nclient = YolkenTest6(\n    api_key=os.environ.get("PETSTORE_API_KEY"),  # This is the default and can be omitted\n)\nclient.store.orders.delete(\n    0,\n)',
      },
      typescript: {
        method: 'client.store.orders.delete',
        example:
          "import YolkenTest6 from 'yolken-test6';\n\nconst client = new YolkenTest6({\n  apiKey: process.env['PETSTORE_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.store.orders.delete(0);",
      },
    },
  },
  {
    name: 'create',
    endpoint: '/user',
    httpMethod: 'post',
    summary: 'Create user',
    description: 'This can only be done by the logged in user.',
    stainlessPath: '(resource) users > (method) create',
    qualified: 'client.users.create',
    params: [
      'id?: number;',
      'email?: string;',
      'firstName?: string;',
      'lastName?: string;',
      'password?: string;',
      'phone?: string;',
      'username?: string;',
      'userStatus?: number;',
    ],
    response:
      '{ id?: number; email?: string; firstName?: string; lastName?: string; password?: string; phone?: string; username?: string; userStatus?: number; }',
    markdown:
      "## create\n\n`client.users.create(id?: number, email?: string, firstName?: string, lastName?: string, password?: string, phone?: string, username?: string, userStatus?: number): { id?: number; email?: string; firstName?: string; lastName?: string; password?: string; phone?: string; username?: string; userStatus?: number; }`\n\n**post** `/user`\n\nThis can only be done by the logged in user.\n\n### Parameters\n\n- `id?: number`\n\n- `email?: string`\n\n- `firstName?: string`\n\n- `lastName?: string`\n\n- `password?: string`\n\n- `phone?: string`\n\n- `username?: string`\n\n- `userStatus?: number`\n  User Status\n\n### Returns\n\n- `{ id?: number; email?: string; firstName?: string; lastName?: string; password?: string; phone?: string; username?: string; userStatus?: number; }`\n\n  - `id?: number`\n  - `email?: string`\n  - `firstName?: string`\n  - `lastName?: string`\n  - `password?: string`\n  - `phone?: string`\n  - `username?: string`\n  - `userStatus?: number`\n\n### Example\n\n```typescript\nimport YolkenTest6 from 'yolken-test6';\n\nconst client = new YolkenTest6();\n\nconst user = await client.users.create();\n\nconsole.log(user);\n```",
    perLanguage: {
      go: {
        method: 'client.Users.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/yolken-test6-go"\n\t"github.com/stainless-sdks/yolken-test6-go/option"\n)\n\nfunc main() {\n\tclient := yolkentest6.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tuser, err := client.Users.New(context.TODO(), yolkentest6.UserNewParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", user.ID)\n}\n',
      },
      http: {
        example:
          'curl https://petstore3.swagger.io/api/v3/user \\\n    -X POST \\\n    -H "api_key: $PETSTORE_API_KEY"',
      },
      java: {
        method: 'users().create',
        example:
          'package com.yolken.api.example;\n\nimport com.yolken.api.client.YolkenTest6Client;\nimport com.yolken.api.client.okhttp.YolkenTest6OkHttpClient;\nimport com.yolken.api.models.users.User;\nimport com.yolken.api.models.users.UserCreateParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        YolkenTest6Client client = YolkenTest6OkHttpClient.fromEnv();\n\n        User user = client.users().create();\n    }\n}',
      },
      python: {
        method: 'users.create',
        example:
          'import os\nfrom yolken_test6 import YolkenTest6\n\nclient = YolkenTest6(\n    api_key=os.environ.get("PETSTORE_API_KEY"),  # This is the default and can be omitted\n)\nuser = client.users.create()\nprint(user.id)',
      },
      typescript: {
        method: 'client.users.create',
        example:
          "import YolkenTest6 from 'yolken-test6';\n\nconst client = new YolkenTest6({\n  apiKey: process.env['PETSTORE_API_KEY'], // This is the default and can be omitted\n});\n\nconst user = await client.users.create();\n\nconsole.log(user.id);",
      },
    },
  },
  {
    name: 'create_with_list',
    endpoint: '/user/createWithList',
    httpMethod: 'post',
    summary: 'Creates list of users with given input array',
    description: 'Creates list of users with given input array',
    stainlessPath: '(resource) users > (method) create_with_list',
    qualified: 'client.users.createWithList',
    params: [
      'items?: { id?: number; email?: string; firstName?: string; lastName?: string; password?: string; phone?: string; username?: string; userStatus?: number; }[];',
    ],
    response:
      '{ id?: number; email?: string; firstName?: string; lastName?: string; password?: string; phone?: string; username?: string; userStatus?: number; }',
    markdown:
      "## create_with_list\n\n`client.users.createWithList(items?: { id?: number; email?: string; firstName?: string; lastName?: string; password?: string; phone?: string; username?: string; userStatus?: number; }[]): { id?: number; email?: string; firstName?: string; lastName?: string; password?: string; phone?: string; username?: string; userStatus?: number; }`\n\n**post** `/user/createWithList`\n\nCreates list of users with given input array\n\n### Parameters\n\n- `items?: { id?: number; email?: string; firstName?: string; lastName?: string; password?: string; phone?: string; username?: string; userStatus?: number; }[]`\n\n### Returns\n\n- `{ id?: number; email?: string; firstName?: string; lastName?: string; password?: string; phone?: string; username?: string; userStatus?: number; }`\n\n  - `id?: number`\n  - `email?: string`\n  - `firstName?: string`\n  - `lastName?: string`\n  - `password?: string`\n  - `phone?: string`\n  - `username?: string`\n  - `userStatus?: number`\n\n### Example\n\n```typescript\nimport YolkenTest6 from 'yolken-test6';\n\nconst client = new YolkenTest6();\n\nconst user = await client.users.createWithList();\n\nconsole.log(user);\n```",
    perLanguage: {
      go: {
        method: 'client.Users.NewWithList',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/yolken-test6-go"\n\t"github.com/stainless-sdks/yolken-test6-go/option"\n)\n\nfunc main() {\n\tclient := yolkentest6.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tuser, err := client.Users.NewWithList(context.TODO(), yolkentest6.UserNewWithListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", user.ID)\n}\n',
      },
      http: {
        example:
          'curl https://petstore3.swagger.io/api/v3/user/createWithList \\\n    -X POST \\\n    -H "api_key: $PETSTORE_API_KEY"',
      },
      java: {
        method: 'users().createWithList',
        example:
          'package com.yolken.api.example;\n\nimport com.yolken.api.client.YolkenTest6Client;\nimport com.yolken.api.client.okhttp.YolkenTest6OkHttpClient;\nimport com.yolken.api.models.users.User;\nimport com.yolken.api.models.users.UserCreateWithListParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        YolkenTest6Client client = YolkenTest6OkHttpClient.fromEnv();\n\n        User user = client.users().createWithList();\n    }\n}',
      },
      python: {
        method: 'users.create_with_list',
        example:
          'import os\nfrom yolken_test6 import YolkenTest6\n\nclient = YolkenTest6(\n    api_key=os.environ.get("PETSTORE_API_KEY"),  # This is the default and can be omitted\n)\nuser = client.users.create_with_list()\nprint(user.id)',
      },
      typescript: {
        method: 'client.users.createWithList',
        example:
          "import YolkenTest6 from 'yolken-test6';\n\nconst client = new YolkenTest6({\n  apiKey: process.env['PETSTORE_API_KEY'], // This is the default and can be omitted\n});\n\nconst user = await client.users.createWithList();\n\nconsole.log(user.id);",
      },
    },
  },
  {
    name: 'login',
    endpoint: '/user/login',
    httpMethod: 'get',
    summary: 'Logs user into the system',
    description: 'Logs user into the system',
    stainlessPath: '(resource) users > (method) login',
    qualified: 'client.users.login',
    params: ['password?: string;', 'username?: string;'],
    response: 'string',
    markdown:
      "## login\n\n`client.users.login(password?: string, username?: string): string`\n\n**get** `/user/login`\n\nLogs user into the system\n\n### Parameters\n\n- `password?: string`\n  The password for login in clear text\n\n- `username?: string`\n  The user name for login\n\n### Returns\n\n- `string`\n\n### Example\n\n```typescript\nimport YolkenTest6 from 'yolken-test6';\n\nconst client = new YolkenTest6();\n\nconst response = await client.users.login();\n\nconsole.log(response);\n```",
    perLanguage: {
      go: {
        method: 'client.Users.Login',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/yolken-test6-go"\n\t"github.com/stainless-sdks/yolken-test6-go/option"\n)\n\nfunc main() {\n\tclient := yolkentest6.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Users.Login(context.TODO(), yolkentest6.UserLoginParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response)\n}\n',
      },
      http: {
        example:
          'curl https://petstore3.swagger.io/api/v3/user/login \\\n    -H "api_key: $PETSTORE_API_KEY"',
      },
      java: {
        method: 'users().login',
        example:
          'package com.yolken.api.example;\n\nimport com.yolken.api.client.YolkenTest6Client;\nimport com.yolken.api.client.okhttp.YolkenTest6OkHttpClient;\nimport com.yolken.api.models.users.UserLoginParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        YolkenTest6Client client = YolkenTest6OkHttpClient.fromEnv();\n\n        String response = client.users().login();\n    }\n}',
      },
      python: {
        method: 'users.login',
        example:
          'import os\nfrom yolken_test6 import YolkenTest6\n\nclient = YolkenTest6(\n    api_key=os.environ.get("PETSTORE_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.users.login()\nprint(response)',
      },
      typescript: {
        method: 'client.users.login',
        example:
          "import YolkenTest6 from 'yolken-test6';\n\nconst client = new YolkenTest6({\n  apiKey: process.env['PETSTORE_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.users.login();\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'logout',
    endpoint: '/user/logout',
    httpMethod: 'get',
    summary: 'Logs out current logged in user session',
    description: 'Logs out current logged in user session',
    stainlessPath: '(resource) users > (method) logout',
    qualified: 'client.users.logout',
    markdown:
      "## logout\n\n`client.users.logout(): void`\n\n**get** `/user/logout`\n\nLogs out current logged in user session\n\n### Example\n\n```typescript\nimport YolkenTest6 from 'yolken-test6';\n\nconst client = new YolkenTest6();\n\nawait client.users.logout()\n```",
    perLanguage: {
      go: {
        method: 'client.Users.Logout',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/stainless-sdks/yolken-test6-go"\n\t"github.com/stainless-sdks/yolken-test6-go/option"\n)\n\nfunc main() {\n\tclient := yolkentest6.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\terr := client.Users.Logout(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      http: {
        example:
          'curl https://petstore3.swagger.io/api/v3/user/logout \\\n    -H "api_key: $PETSTORE_API_KEY"',
      },
      java: {
        method: 'users().logout',
        example:
          'package com.yolken.api.example;\n\nimport com.yolken.api.client.YolkenTest6Client;\nimport com.yolken.api.client.okhttp.YolkenTest6OkHttpClient;\nimport com.yolken.api.models.users.UserLogoutParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        YolkenTest6Client client = YolkenTest6OkHttpClient.fromEnv();\n\n        client.users().logout();\n    }\n}',
      },
      python: {
        method: 'users.logout',
        example:
          'import os\nfrom yolken_test6 import YolkenTest6\n\nclient = YolkenTest6(\n    api_key=os.environ.get("PETSTORE_API_KEY"),  # This is the default and can be omitted\n)\nclient.users.logout()',
      },
      typescript: {
        method: 'client.users.logout',
        example:
          "import YolkenTest6 from 'yolken-test6';\n\nconst client = new YolkenTest6({\n  apiKey: process.env['PETSTORE_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.users.logout();",
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/user/{username}',
    httpMethod: 'get',
    summary: 'Get user by user name',
    description: 'Get user by user name',
    stainlessPath: '(resource) users > (method) retrieve',
    qualified: 'client.users.retrieve',
    params: ['username: string;'],
    response:
      '{ id?: number; email?: string; firstName?: string; lastName?: string; password?: string; phone?: string; username?: string; userStatus?: number; }',
    markdown:
      "## retrieve\n\n`client.users.retrieve(username: string): { id?: number; email?: string; firstName?: string; lastName?: string; password?: string; phone?: string; username?: string; userStatus?: number; }`\n\n**get** `/user/{username}`\n\nGet user by user name\n\n### Parameters\n\n- `username: string`\n\n### Returns\n\n- `{ id?: number; email?: string; firstName?: string; lastName?: string; password?: string; phone?: string; username?: string; userStatus?: number; }`\n\n  - `id?: number`\n  - `email?: string`\n  - `firstName?: string`\n  - `lastName?: string`\n  - `password?: string`\n  - `phone?: string`\n  - `username?: string`\n  - `userStatus?: number`\n\n### Example\n\n```typescript\nimport YolkenTest6 from 'yolken-test6';\n\nconst client = new YolkenTest6();\n\nconst user = await client.users.retrieve('username');\n\nconsole.log(user);\n```",
    perLanguage: {
      go: {
        method: 'client.Users.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/yolken-test6-go"\n\t"github.com/stainless-sdks/yolken-test6-go/option"\n)\n\nfunc main() {\n\tclient := yolkentest6.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tuser, err := client.Users.Get(context.TODO(), "username")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", user.ID)\n}\n',
      },
      http: {
        example:
          'curl https://petstore3.swagger.io/api/v3/user/$USERNAME \\\n    -H "api_key: $PETSTORE_API_KEY"',
      },
      java: {
        method: 'users().retrieve',
        example:
          'package com.yolken.api.example;\n\nimport com.yolken.api.client.YolkenTest6Client;\nimport com.yolken.api.client.okhttp.YolkenTest6OkHttpClient;\nimport com.yolken.api.models.users.User;\nimport com.yolken.api.models.users.UserRetrieveParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        YolkenTest6Client client = YolkenTest6OkHttpClient.fromEnv();\n\n        User user = client.users().retrieve("username");\n    }\n}',
      },
      python: {
        method: 'users.retrieve',
        example:
          'import os\nfrom yolken_test6 import YolkenTest6\n\nclient = YolkenTest6(\n    api_key=os.environ.get("PETSTORE_API_KEY"),  # This is the default and can be omitted\n)\nuser = client.users.retrieve(\n    "username",\n)\nprint(user.id)',
      },
      typescript: {
        method: 'client.users.retrieve',
        example:
          "import YolkenTest6 from 'yolken-test6';\n\nconst client = new YolkenTest6({\n  apiKey: process.env['PETSTORE_API_KEY'], // This is the default and can be omitted\n});\n\nconst user = await client.users.retrieve('username');\n\nconsole.log(user.id);",
      },
    },
  },
  {
    name: 'update',
    endpoint: '/user/{username}',
    httpMethod: 'put',
    summary: 'Update user',
    description: 'This can only be done by the logged in user.',
    stainlessPath: '(resource) users > (method) update',
    qualified: 'client.users.update',
    params: [
      'username: string;',
      'id?: number;',
      'email?: string;',
      'firstName?: string;',
      'lastName?: string;',
      'password?: string;',
      'phone?: string;',
      'username?: string;',
      'userStatus?: number;',
    ],
    markdown:
      "## update\n\n`client.users.update(username: string, id?: number, email?: string, firstName?: string, lastName?: string, password?: string, phone?: string, username?: string, userStatus?: number): void`\n\n**put** `/user/{username}`\n\nThis can only be done by the logged in user.\n\n### Parameters\n\n- `username: string`\n\n- `id?: number`\n\n- `email?: string`\n\n- `firstName?: string`\n\n- `lastName?: string`\n\n- `password?: string`\n\n- `phone?: string`\n\n- `username?: string`\n\n- `userStatus?: number`\n  User Status\n\n### Example\n\n```typescript\nimport YolkenTest6 from 'yolken-test6';\n\nconst client = new YolkenTest6();\n\nawait client.users.update('username')\n```",
    perLanguage: {
      go: {
        method: 'client.Users.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/stainless-sdks/yolken-test6-go"\n\t"github.com/stainless-sdks/yolken-test6-go/option"\n)\n\nfunc main() {\n\tclient := yolkentest6.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\terr := client.Users.Update(\n\t\tcontext.TODO(),\n\t\t"username",\n\t\tyolkentest6.UserUpdateParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      http: {
        example:
          'curl https://petstore3.swagger.io/api/v3/user/$EXISTING_USERNAME \\\n    -X PUT \\\n    -H "api_key: $PETSTORE_API_KEY"',
      },
      java: {
        method: 'users().update',
        example:
          'package com.yolken.api.example;\n\nimport com.yolken.api.client.YolkenTest6Client;\nimport com.yolken.api.client.okhttp.YolkenTest6OkHttpClient;\nimport com.yolken.api.models.users.UserUpdateParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        YolkenTest6Client client = YolkenTest6OkHttpClient.fromEnv();\n\n        client.users().update("username");\n    }\n}',
      },
      python: {
        method: 'users.update',
        example:
          'import os\nfrom yolken_test6 import YolkenTest6\n\nclient = YolkenTest6(\n    api_key=os.environ.get("PETSTORE_API_KEY"),  # This is the default and can be omitted\n)\nclient.users.update(\n    existing_username="username",\n)',
      },
      typescript: {
        method: 'client.users.update',
        example:
          "import YolkenTest6 from 'yolken-test6';\n\nconst client = new YolkenTest6({\n  apiKey: process.env['PETSTORE_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.users.update('username');",
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/user/{username}',
    httpMethod: 'delete',
    summary: 'Delete user',
    description: 'This can only be done by the logged in user.',
    stainlessPath: '(resource) users > (method) delete',
    qualified: 'client.users.delete',
    params: ['username: string;'],
    markdown:
      "## delete\n\n`client.users.delete(username: string): void`\n\n**delete** `/user/{username}`\n\nThis can only be done by the logged in user.\n\n### Parameters\n\n- `username: string`\n\n### Example\n\n```typescript\nimport YolkenTest6 from 'yolken-test6';\n\nconst client = new YolkenTest6();\n\nawait client.users.delete('username')\n```",
    perLanguage: {
      go: {
        method: 'client.Users.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/stainless-sdks/yolken-test6-go"\n\t"github.com/stainless-sdks/yolken-test6-go/option"\n)\n\nfunc main() {\n\tclient := yolkentest6.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\terr := client.Users.Delete(context.TODO(), "username")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      http: {
        example:
          'curl https://petstore3.swagger.io/api/v3/user/$USERNAME \\\n    -X DELETE \\\n    -H "api_key: $PETSTORE_API_KEY"',
      },
      java: {
        method: 'users().delete',
        example:
          'package com.yolken.api.example;\n\nimport com.yolken.api.client.YolkenTest6Client;\nimport com.yolken.api.client.okhttp.YolkenTest6OkHttpClient;\nimport com.yolken.api.models.users.UserDeleteParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        YolkenTest6Client client = YolkenTest6OkHttpClient.fromEnv();\n\n        client.users().delete("username");\n    }\n}',
      },
      python: {
        method: 'users.delete',
        example:
          'import os\nfrom yolken_test6 import YolkenTest6\n\nclient = YolkenTest6(\n    api_key=os.environ.get("PETSTORE_API_KEY"),  # This is the default and can be omitted\n)\nclient.users.delete(\n    "username",\n)',
      },
      typescript: {
        method: 'client.users.delete',
        example:
          "import YolkenTest6 from 'yolken-test6';\n\nconst client = new YolkenTest6({\n  apiKey: process.env['PETSTORE_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.users.delete('username');",
      },
    },
  },
];

const EMBEDDED_READMES: { language: string; content: string }[] = [
  {
    language: 'python',
    content:
      '# Yolken Test6 Python API library\n\n<!-- prettier-ignore -->\n[![PyPI version](https://img.shields.io/pypi/v/yolken_test6.svg?label=pypi%20(stable))](https://pypi.org/project/yolken_test6/)\n\nThe Yolken Test6 Python library provides convenient access to the Yolken Test6 REST API from any Python 3.9+\napplication. The library includes type definitions for all request params and response fields,\nand offers both synchronous and asynchronous clients powered by [httpx](https://github.com/encode/httpx).\n\n\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Yolken Test6 MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=yolken-test6-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsInlvbGtlbi10ZXN0Ni1tY3AiXSwiZW52Ijp7IlBFVFNUT1JFX0FQSV9LRVkiOiJNeSBBUEkgS2V5In19)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22yolken-test6-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22yolken-test6-mcp%22%5D%2C%22env%22%3A%7B%22PETSTORE_API_KEY%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Documentation\n\nThe REST API documentation can be found on [example16.com](http://example16.com). The full API of this library can be found in [api.md](api.md).\n\n## Installation\n\n```sh\n# install from the production repo\npip install git+ssh://git@github.com/yolken/yolken-test6-python.git\n```\n> [!NOTE]\n> Once this package is [published to PyPI](https://www.stainless.com/docs/guides/publish), this will become: `pip install yolken_test6`\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n```python\nimport os\nfrom yolken_test6 import YolkenTest6\n\nclient = YolkenTest6(\n    api_key=os.environ.get("PETSTORE_API_KEY"),  # This is the default and can be omitted\n)\n\norder = client.store.orders.create(\n    pet_id=1,\n    quantity=1,\n    status="placed",\n)\nprint(order.id)\n```\n\nWhile you can provide an `api_key` keyword argument,\nwe recommend using [python-dotenv](https://pypi.org/project/python-dotenv/)\nto add `PETSTORE_API_KEY="My API Key"` to your `.env` file\nso that your API Key is not stored in source control.\n\n## Async usage\n\nSimply import `AsyncYolkenTest6` instead of `YolkenTest6` and use `await` with each API call:\n\n```python\nimport os\nimport asyncio\nfrom yolken_test6 import AsyncYolkenTest6\n\nclient = AsyncYolkenTest6(\n    api_key=os.environ.get("PETSTORE_API_KEY"),  # This is the default and can be omitted\n)\n\nasync def main() -> None:\n  order = await client.store.orders.create(\n      pet_id=1,\n      quantity=1,\n      status="placed",\n  )\n  print(order.id)\n\nasyncio.run(main())\n```\n\nFunctionality between the synchronous and asynchronous clients is otherwise identical.\n\n### With aiohttp\n\nBy default, the async client uses `httpx` for HTTP requests. However, for improved concurrency performance you may also use `aiohttp` as the HTTP backend.\n\nYou can enable this by installing `aiohttp`:\n\n```sh\n# install from the production repo\npip install \'yolken_test6[aiohttp] @ git+ssh://git@github.com/yolken/yolken-test6-python.git\'\n```\n\nThen you can enable it by instantiating the client with `http_client=DefaultAioHttpClient()`:\n\n```python\nimport os\nimport asyncio\nfrom yolken_test6 import DefaultAioHttpClient\nfrom yolken_test6 import AsyncYolkenTest6\n\nasync def main() -> None:\n  async with AsyncYolkenTest6(\n    api_key=os.environ.get("PETSTORE_API_KEY"),  # This is the default and can be omitted\n    http_client=DefaultAioHttpClient(),\n) as client:\n    order = await client.store.orders.create(\n        pet_id=1,\n        quantity=1,\n        status="placed",\n    )\n    print(order.id)\n\nasyncio.run(main())\n```\n\n\n\n## Using types\n\nNested request parameters are [TypedDicts](https://docs.python.org/3/library/typing.html#typing.TypedDict). Responses are [Pydantic models](https://docs.pydantic.dev) which also provide helper methods for things like:\n\n- Serializing back into JSON, `model.to_json()`\n- Converting to a dictionary, `model.to_dict()`\n\nTyped requests and responses provide autocomplete and documentation within your editor. If you would like to see type errors in VS Code to help catch bugs earlier, set `python.analysis.typeCheckingMode` to `basic`.\n\n\n\n## Nested params\n\nNested parameters are dictionaries, typed using `TypedDict`, for example:\n\n```python\nfrom yolken_test6 import YolkenTest6\n\nclient = YolkenTest6()\n\npet = client.pets.create(\n    name="doggie",\n    photo_urls=["string"],\n    category={},\n)\nprint(pet.category)\n```\n\n\n\n## Handling errors\n\nWhen the library is unable to connect to the API (for example, due to network connection problems or a timeout), a subclass of `yolken_test6.APIConnectionError` is raised.\n\nWhen the API returns a non-success status code (that is, 4xx or 5xx\nresponse), a subclass of `yolken_test6.APIStatusError` is raised, containing `status_code` and `response` properties.\n\nAll errors inherit from `yolken_test6.APIError`.\n\n```python\nimport yolken_test6\nfrom yolken_test6 import YolkenTest6\n\nclient = YolkenTest6()\n\ntry:\n    client.store.list_inventory()\nexcept yolken_test6.APIConnectionError as e:\n    print("The server could not be reached")\n    print(e.__cause__) # an underlying Exception, likely raised within httpx.\nexcept yolken_test6.RateLimitError as e:\n    print("A 429 status code was received; we should back off a bit.")\nexcept yolken_test6.APIStatusError as e:\n    print("Another non-200-range status code was received")\n    print(e.status_code)\n    print(e.response)\n```\n\nError codes are as follows:\n\n| Status Code | Error Type                 |\n| ----------- | -------------------------- |\n| 400         | `BadRequestError`          |\n| 401         | `AuthenticationError`      |\n| 403         | `PermissionDeniedError`    |\n| 404         | `NotFoundError`            |\n| 422         | `UnprocessableEntityError` |\n| 429         | `RateLimitError`           |\n| >=500       | `InternalServerError`      |\n| N/A         | `APIConnectionError`       |\n\n### Retries\n\nCertain errors are automatically retried 2 times by default, with a short exponential backoff.\nConnection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict,\n429 Rate Limit, and >=500 Internal errors are all retried by default.\n\nYou can use the `max_retries` option to configure or disable retry settings:\n\n```python\nfrom yolken_test6 import YolkenTest6\n\n# Configure the default for all requests:\nclient = YolkenTest6(\n    # default is 2\n    max_retries=0,\n)\n\n# Or, configure per-request:\nclient.with_options(max_retries = 5).store.list_inventory()\n```\n\n### Timeouts\n\nBy default requests time out after 1 minute. You can configure this with a `timeout` option,\nwhich accepts a float or an [`httpx.Timeout`](https://www.python-httpx.org/advanced/timeouts/#fine-tuning-the-configuration) object:\n\n```python\nfrom yolken_test6 import YolkenTest6\n\n# Configure the default for all requests:\nclient = YolkenTest6(\n    # 20 seconds (default is 1 minute)\n    timeout=20.0,\n)\n\n# More granular control:\nclient = YolkenTest6(\n    timeout=httpx.Timeout(60.0, read=5.0, write=10.0, connect=2.0),\n)\n\n# Override per-request:\nclient.with_options(timeout = 5.0).store.list_inventory()\n```\n\nOn timeout, an `APITimeoutError` is thrown.\n\nNote that requests that time out are [retried twice by default](#retries).\n\n\n\n## Advanced\n\n### Logging\n\nWe use the standard library [`logging`](https://docs.python.org/3/library/logging.html) module.\n\nYou can enable logging by setting the environment variable `YOLKEN_TEST6_LOG` to `info`.\n\n```shell\n$ export YOLKEN_TEST6_LOG=info\n```\n\nOr to `debug` for more verbose logging.\n\n### How to tell whether `None` means `null` or missing\n\nIn an API response, a field may be explicitly `null`, or missing entirely; in either case, its value is `None` in this library. You can differentiate the two cases with `.model_fields_set`:\n\n```py\nif response.my_field is None:\n  if \'my_field\' not in response.model_fields_set:\n    print(\'Got json like {}, without a "my_field" key present at all.\')\n  else:\n    print(\'Got json like {"my_field": null}.\')\n```\n\n### Accessing raw response data (e.g. headers)\n\nThe "raw" Response object can be accessed by prefixing `.with_raw_response.` to any HTTP method call, e.g.,\n\n```py\nfrom yolken_test6 import YolkenTest6\n\nclient = YolkenTest6()\nresponse = client.store.with_raw_response.list_inventory()\nprint(response.headers.get(\'X-My-Header\'))\n\nstore = response.parse()  # get the object that `store.list_inventory()` would have returned\nprint(store)\n```\n\nThese methods return an [`APIResponse`](https://github.com/yolken/yolken-test6-python/tree/main/src/yolken_test6/_response.py) object.\n\nThe async client returns an [`AsyncAPIResponse`](https://github.com/yolken/yolken-test6-python/tree/main/src/yolken_test6/_response.py) with the same structure, the only difference being `await`able methods for reading the response content.\n\n#### `.with_streaming_response`\n\nThe above interface eagerly reads the full response body when you make the request, which may not always be what you want.\n\nTo stream the response body, use `.with_streaming_response` instead, which requires a context manager and only reads the response body once you call `.read()`, `.text()`, `.json()`, `.iter_bytes()`, `.iter_text()`, `.iter_lines()` or `.parse()`. In the async client, these are async methods.\n\n```python\nwith client.store.with_streaming_response.list_inventory() as response :\n    print(response.headers.get(\'X-My-Header\'))\n\n    for line in response.iter_lines():\n      print(line)\n```\n\nThe context manager is required so that the response will reliably be closed.\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API.\n\nIf you need to access undocumented endpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can make requests using `client.get`, `client.post`, and other\nhttp verbs. Options on the client will be respected (such as retries) when making this request.\n\n```py\nimport httpx\n\nresponse = client.post(\n    "/foo",\n    cast_to=httpx.Response,\n    body={"my_param": True},\n)\n\nprint(response.headers.get("x-foo"))\n```\n\n#### Undocumented request params\n\nIf you want to explicitly send an extra param, you can do so with the `extra_query`, `extra_body`, and `extra_headers` request\noptions.\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you can access the extra fields like `response.unknown_prop`. You\ncan also get all the extra fields on the Pydantic model as a dict with\n[`response.model_extra`](https://docs.pydantic.dev/latest/api/base_model/#pydantic.BaseModel.model_extra).\n\n### Configuring the HTTP client\n\nYou can directly override the [httpx client](https://www.python-httpx.org/api/#client) to customize it for your use case, including:\n\n- Support for [proxies](https://www.python-httpx.org/advanced/proxies/)\n- Custom [transports](https://www.python-httpx.org/advanced/transports/)\n- Additional [advanced](https://www.python-httpx.org/advanced/clients/) functionality\n\n```python\nimport httpx\nfrom yolken_test6 import YolkenTest6, DefaultHttpxClient\n\nclient = YolkenTest6(\n    # Or use the `YOLKEN_TEST6_BASE_URL` env var\n    base_url="http://my.test.server.example.com:8083",\n    http_client=DefaultHttpxClient(proxy="http://my.test.proxy.example.com", transport=httpx.HTTPTransport(local_address="0.0.0.0")),\n)\n```\n\nYou can also customize the client on a per-request basis by using `with_options()`:\n\n```python\nclient.with_options(http_client=DefaultHttpxClient(...))\n```\n\n### Managing HTTP resources\n\nBy default the library closes underlying HTTP connections whenever the client is [garbage collected](https://docs.python.org/3/reference/datamodel.html#object.__del__). You can manually close the client using the `.close()` method if desired, or with a context manager that closes when exiting.\n\n```py\nfrom yolken_test6 import YolkenTest6\n\nwith YolkenTest6() as client:\n  # make requests here\n  ...\n\n# HTTP client is now closed\n```\n\n## Versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes that only affect static types, without breaking runtime behavior.\n2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n3. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/yolken/yolken-test6-python/issues) with questions, bugs, or suggestions.\n\n### Determining the installed version\n\nIf you\'ve upgraded to the latest version but aren\'t seeing any new features you were expecting then your python environment is likely still using an older version.\n\nYou can determine the version that is being used at runtime with:\n\n```py\nimport yolken_test6\nprint(yolken_test6.__version__)\n```\n\n## Requirements\n\nPython 3.9 or higher.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n',
  },
  {
    language: 'go',
    content:
      '# Yolken Test6 Go API Library\n\n<a href="https://pkg.go.dev/github.com/stainless-sdks/yolken-test6-go"><img src="https://pkg.go.dev/badge/github.com/stainless-sdks/yolken-test6-go.svg" alt="Go Reference"></a>\n\nThe Yolken Test6 Go library provides convenient access to the [Yolken Test6 REST API](http://example16.com)\nfrom applications written in Go.\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Yolken Test6 MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=yolken-test6-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsInlvbGtlbi10ZXN0Ni1tY3AiXSwiZW52Ijp7IlBFVFNUT1JFX0FQSV9LRVkiOiJNeSBBUEkgS2V5In19)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22yolken-test6-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22yolken-test6-mcp%22%5D%2C%22env%22%3A%7B%22PETSTORE_API_KEY%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Installation\n\n\n\n```go\nimport (\n\t"github.com/stainless-sdks/yolken-test6-go" // imported as SDK_PackageName\n)\n```\n\n\n\nOr to pin the version:\n\n\n\n```sh\ngo get -u \'github.com/stainless-sdks/yolken-test6-go@v0.0.1\'\n```\n\n\n\n## Requirements\n\nThis library requires Go 1.22+.\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n```go\npackage main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/yolken-test6-go"\n\t"github.com/stainless-sdks/yolken-test6-go/option"\n)\n\nfunc main() {\n\tclient := yolkentest6.NewClient(\n\t\toption.WithAPIKey("My API Key"), // defaults to os.LookupEnv("PETSTORE_API_KEY")\n\t)\n\torder, err := client.Store.Orders.New(context.TODO(), yolkentest6.StoreOrderNewParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", order.ID)\n}\n\n```\n\n### Request fields\n\nAll request parameters are wrapped in a generic `Field` type,\nwhich we use to distinguish zero values from null or omitted fields.\n\nThis prevents accidentally sending a zero value if you forget a required parameter,\nand enables explicitly sending `null`, `false`, `\'\'`, or `0` on optional parameters.\nAny field not specified is not sent.\n\nTo construct fields with values, use the helpers `String()`, `Int()`, `Float()`, or most commonly, the generic `F[T]()`.\nTo send a null, use `Null[T]()`, and to send a nonconforming value, use `Raw[T](any)`. For example:\n\n```go\nparams := FooParams{\n\tName: SDK_PackageName.F("hello"),\n\n\t// Explicitly send `"description": null`\n\tDescription: SDK_PackageName.Null[string](),\n\n\tPoint: SDK_PackageName.F(SDK_PackageName.Point{\n\t\tX: SDK_PackageName.Int(0),\n\t\tY: SDK_PackageName.Int(1),\n\n\t\t// In cases where the API specifies a given type,\n\t\t// but you want to send something else, use `Raw`:\n\t\tZ: SDK_PackageName.Raw[int64](0.01), // sends a float\n\t}),\n}\n```\n\n### Response objects\n\nAll fields in response structs are value types (not pointers or wrappers).\n\nIf a given field is `null`, not present, or invalid, the corresponding field\nwill simply be its zero value.\n\nAll response structs also include a special `JSON` field, containing more detailed\ninformation about each property, which you can use like so:\n\n```go\nif res.Name == "" {\n\t// true if `"name"` is either not present or explicitly null\n\tres.JSON.Name.IsNull()\n\n\t// true if the `"name"` key was not present in the response JSON at all\n\tres.JSON.Name.IsMissing()\n\n\t// When the API returns data that cannot be coerced to the expected type:\n\tif res.JSON.Name.IsInvalid() {\n\t\traw := res.JSON.Name.Raw()\n\n\t\tlegacyName := struct{\n\t\t\tFirst string `json:"first"`\n\t\t\tLast  string `json:"last"`\n\t\t}{}\n\t\tjson.Unmarshal([]byte(raw), &legacyName)\n\t\tname = legacyName.First + " " + legacyName.Last\n\t}\n}\n```\n\nThese `.JSON` structs also include an `Extras` map containing\nany properties in the json response that were not specified\nin the struct. This can be useful for API features not yet\npresent in the SDK.\n\n```go\nbody := res.JSON.ExtraFields["my_unexpected_field"].Raw()\n```\n\n### RequestOptions\n\nThis library uses the functional options pattern. Functions defined in the\n`SDK_PackageOptionName` package return a `RequestOption`, which is a closure that mutates a\n`RequestConfig`. These options can be supplied to the client or at individual\nrequests. For example:\n\n```go\nclient := SDK_PackageName.SDK_ClientInitializerName(\n\t// Adds a header to every request made by the client\n\tSDK_PackageOptionName.WithHeader("X-Some-Header", "custom_header_info"),\n)\n\nclient.Store.ListInventory(context.TODO(), ...,\n\t// Override the header\n\tSDK_PackageOptionName.WithHeader("X-Some-Header", "some_other_custom_header_info"),\n\t// Add an undocumented field to the request body, using sjson syntax\n\tSDK_PackageOptionName.WithJSONSet("some.json.path", map[string]string{"my": "object"}),\n)\n```\n\nSee the [full list of request options](https://pkg.go.dev/github.com/stainless-sdks/yolken-test6-go/SDK_PackageOptionName).\n\n### Pagination\n\nThis library provides some conveniences for working with paginated list endpoints.\n\nYou can use `.ListAutoPaging()` methods to iterate through items across all pages:\n\n\n\nOr you can use simple `.List()` methods to fetch a single page and receive a standard response object\nwith additional helper methods like `.GetNextPage()`, e.g.:\n\n\n\n### Errors\n\nWhen the API returns a non-success status code, we return an error with type\n`*SDK_PackageName.Error`. This contains the `StatusCode`, `*http.Request`, and\n`*http.Response` values of the request, as well as the JSON of the error body\n(much like other response objects in the SDK).\n\nTo handle errors, we recommend that you use the `errors.As` pattern:\n\n```go\n_, err := client.Store.ListInventory(context.TODO())\nif err != nil {\n\tvar apierr *yolkentest6.Error\n\tif errors.As(err, &apierr) {\n\t\tprintln(string(apierr.DumpRequest(true)))  // Prints the serialized HTTP request\n\t\tprintln(string(apierr.DumpResponse(true))) // Prints the serialized HTTP response\n\t}\n\tpanic(err.Error()) // GET "/store/inventory": 400 Bad Request { ... }\n}\n```\n\nWhen other errors occur, they are returned unwrapped; for example,\nif HTTP transport fails, you might receive `*url.Error` wrapping `*net.OpError`.\n\n### Timeouts\n\nRequests do not time out by default; use context to configure a timeout for a request lifecycle.\n\nNote that if a request is [retried](#retries), the context timeout does not start over.\nTo set a per-retry timeout, use `SDK_PackageOptionName.WithRequestTimeout()`.\n\n```go\n// This sets the timeout for the request, including all the retries.\nctx, cancel := context.WithTimeout(context.Background(), 5*time.Minute)\ndefer cancel()\nclient.Store.ListInventory(\n\tctx,\n\t// This sets the per-retry timeout\n\toption.WithRequestTimeout(20*time.Second),\n)\n```\n\n### File uploads\n\nRequest parameters that correspond to file uploads in multipart requests are typed as\n`param.Field[io.Reader]`. The contents of the `io.Reader` will by default be sent as a multipart form\npart with the file name of "anonymous_file" and content-type of "application/octet-stream".\n\nThe file name and content-type can be customized by implementing `Name() string` or `ContentType()\nstring` on the run-time type of `io.Reader`. Note that `os.File` implements `Name() string`, so a\nfile returned by `os.Open` will be sent with the file name on disk.\n\nWe also provide a helper `SDK_PackageName.FileParam(reader io.Reader, filename string, contentType string)`\nwhich can be used to wrap any `io.Reader` with the appropriate file name and content type.\n\n\n\n### Retries\n\nCertain errors will be automatically retried 2 times by default, with a short exponential backoff.\nWe retry by default all connection errors, 408 Request Timeout, 409 Conflict, 429 Rate Limit,\nand >=500 Internal errors.\n\nYou can use the `WithMaxRetries` option to configure or disable this:\n\n```go\n// Configure the default for all requests:\nclient := yolkentest6.NewClient(\n\toption.WithMaxRetries(0), // default is 2\n)\n\n// Override per-request:\nclient.Store.ListInventory(context.TODO(), option.WithMaxRetries(5))\n```\n\n\n### Accessing raw response data (e.g. response headers)\n\nYou can access the raw HTTP response data by using the `option.WithResponseInto()` request option. This is useful when\nyou need to examine response headers, status codes, or other details.\n\n```go\n// Create a variable to store the HTTP response\nvar response *http.Response\nresponse, err := client.Store.ListInventory(context.TODO(), option.WithResponseInto(&response))\nif err != nil {\n\t// handle error\n}\nfmt.Printf("%+v\\n", response)\n\nfmt.Printf("Status Code: %d\\n", response.StatusCode)\nfmt.Printf("Headers: %+#v\\n", response.Header)\n```\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API. If you need to access undocumented\nendpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can use `client.Get`, `client.Post`, and other HTTP verbs.\n`RequestOptions` on the client, such as retries, will be respected when making these requests.\n\n```go\nvar (\n    // params can be an io.Reader, a []byte, an encoding/json serializable object,\n    // or a "…Params" struct defined in this library.\n    params map[string]interface{}\n\n    // result can be an []byte, *http.Response, a encoding/json deserializable object,\n    // or a model defined in this library.\n    result *http.Response\n)\nerr := client.Post(context.Background(), "/unspecified", params, &result)\nif err != nil {\n    …\n}\n```\n\n#### Undocumented request params\n\nTo make requests using undocumented parameters, you may use either the `SDK_PackageOptionName.WithQuerySet()`\nor the `SDK_PackageOptionName.WithJSONSet()` methods.\n\n```go\nparams := FooNewParams{\n    ID:   SDK_PackageName.F("id_xxxx"),\n    Data: SDK_PackageName.F(FooNewParamsData{\n        FirstName: SDK_PackageName.F("John"),\n    }),\n}\nclient.Foo.New(context.Background(), params, SDK_PackageOptionName.WithJSONSet("data.last_name", "Doe"))\n```\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you may either access the raw JSON of the response as a string\nwith `result.JSON.RawJSON()`, or get the raw JSON of a particular field on the result with\n`result.JSON.Foo.Raw()`.\n\nAny fields that are not present on the response struct will be saved and can be accessed by `result.JSON.ExtraFields()` which returns the extra fields as a `map[string]Field`.\n\n### Middleware\n\nWe provide `SDK_PackageOptionName.WithMiddleware` which applies the given\nmiddleware to requests.\n\n```go\nfunc Logger(req *http.Request, next SDK_PackageOptionName.MiddlewareNext) (res *http.Response, err error) {\n\t// Before the request\n\tstart := time.Now()\n\tLogReq(req)\n\n\t// Forward the request to the next handler\n\tres, err = next(req)\n\n\t// Handle stuff after the request\n\tend := time.Now()\n\tLogRes(res, err, start - end)\n\n    return res, err\n}\n\nclient := SDK_PackageName.SDK_ClientInitializerName(\n\tSDK_PackageOptionName.WithMiddleware(Logger),\n)\n```\n\nWhen multiple middlewares are provided as variadic arguments, the middlewares\nare applied left to right. If `SDK_PackageOptionName.WithMiddleware` is given\nmultiple times, for example first in the client then the method, the\nmiddleware in the client will run first and the middleware given in the method\nwill run next.\n\nYou may also replace the default `http.Client` with\n`SDK_PackageOptionName.WithHTTPClient(client)`. Only one http client is\naccepted (this overwrites any previous client) and receives requests after any\nmiddleware has been applied.\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n2. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/stainless-sdks/yolken-test6-go/issues) with questions, bugs, or suggestions.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n',
  },
  {
    language: 'typescript',
    content:
      "# Yolken Test6 TypeScript API Library\n\n[![NPM version](https://img.shields.io/npm/v/yolken-test6.svg?label=npm%20(stable))](https://npmjs.org/package/yolken-test6) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/yolken-test6)\n\nThis library provides convenient access to the Yolken Test6 REST API from server-side TypeScript or JavaScript.\n\n\n\nThe REST API documentation can be found on [example16.com](http://example16.com). The full API of this library can be found in [api.md](api.md).\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Yolken Test6 MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=yolken-test6-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsInlvbGtlbi10ZXN0Ni1tY3AiXSwiZW52Ijp7IlBFVFNUT1JFX0FQSV9LRVkiOiJNeSBBUEkgS2V5In19)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22yolken-test6-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22yolken-test6-mcp%22%5D%2C%22env%22%3A%7B%22PETSTORE_API_KEY%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Installation\n\n```sh\nnpm install git+ssh://git@github.com:stainless-sdks/yolken-test6-typescript.git\n```\n> [!NOTE]\n> Once this package is [published to npm](https://www.stainless.com/docs/guides/publish), this will become: `npm install yolken-test6`\n\n\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n<!-- prettier-ignore -->\n```js\nimport YolkenTest6 from 'yolken-test6';\n\nconst client = new YolkenTest6({\n  apiKey: process.env['PETSTORE_API_KEY'], // This is the default and can be omitted\n});\n\nconst order = await client.store.orders.create({\n  petId: 1,\n  quantity: 1,\n  status: 'placed',\n});\n\nconsole.log(order.id);\n```\n\n\n\n### Request & Response types\n\nThis library includes TypeScript definitions for all request params and response fields. You may import and use them like so:\n\n<!-- prettier-ignore -->\n```ts\nimport YolkenTest6 from 'yolken-test6';\n\nconst client = new YolkenTest6({\n  apiKey: process.env['PETSTORE_API_KEY'], // This is the default and can be omitted\n});\n\nconst response: YolkenTest6.StoreListInventoryResponse = await client.store.listInventory();\n```\n\nDocumentation for each method, request param, and response field are available in docstrings and will appear on hover in most modern editors.\n\n\n\n\n\n## Handling errors\n\nWhen the library is unable to connect to the API,\nor if the API returns a non-success status code (i.e., 4xx or 5xx response),\na subclass of `APIError` will be thrown:\n\n<!-- prettier-ignore -->\n```ts\nconst response = await client.store.listInventory().catch(async (err) => {\n  if (err instanceof YolkenTest6.APIError) {\n    console.log(err.status); // 400\n    console.log(err.name); // BadRequestError\n    console.log(err.headers); // {server: 'nginx', ...}\n  } else {\n    throw err;\n  }\n});\n```\n\nError codes are as follows:\n\n| Status Code | Error Type                 |\n| ----------- | -------------------------- |\n| 400         | `BadRequestError`          |\n| 401         | `AuthenticationError`      |\n| 403         | `PermissionDeniedError`    |\n| 404         | `NotFoundError`            |\n| 422         | `UnprocessableEntityError` |\n| 429         | `RateLimitError`           |\n| >=500       | `InternalServerError`      |\n| N/A         | `APIConnectionError`       |\n\n### Retries\n\nCertain errors will be automatically retried 2 times by default, with a short exponential backoff.\nConnection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict,\n429 Rate Limit, and >=500 Internal errors will all be retried by default.\n\nYou can use the `maxRetries` option to configure or disable this:\n\n<!-- prettier-ignore -->\n```js\n// Configure the default for all requests:\nconst client = new YolkenTest6({\n  maxRetries: 0, // default is 2\n});\n\n// Or, configure per-request:\nawait client.store.listInventory({\n  maxRetries: 5,\n});\n```\n\n### Timeouts\n\nRequests time out after 1 minute by default. You can configure this with a `timeout` option:\n\n<!-- prettier-ignore -->\n```ts\n// Configure the default for all requests:\nconst client = new YolkenTest6({\n  timeout: 20 * 1000, // 20 seconds (default is 1 minute)\n});\n\n// Override per-request:\nawait client.store.listInventory({\n  timeout: 5 * 1000,\n});\n```\n\nOn timeout, an `APIConnectionTimeoutError` is thrown.\n\nNote that requests which time out will be [retried twice by default](#retries).\n\n\n\n\n\n## Advanced Usage\n\n### Accessing raw Response data (e.g., headers)\n\nThe \"raw\" `Response` returned by `fetch()` can be accessed through the `.asResponse()` method on the `APIPromise` type that all methods return.\nThis method returns as soon as the headers for a successful response are received and does not consume the response body, so you are free to write custom parsing or streaming logic.\n\nYou can also use the `.withResponse()` method to get the raw `Response` along with the parsed data.\nUnlike `.asResponse()` this method consumes the body, returning once it is parsed.\n\n<!-- prettier-ignore -->\n```ts\nconst client = new YolkenTest6();\n\nconst response = await client.store.listInventory().asResponse();\nconsole.log(response.headers.get('X-My-Header'));\nconsole.log(response.statusText); // access the underlying Response object\n\nconst { data: response, response: raw } = await client.store.listInventory().withResponse();\nconsole.log(raw.headers.get('X-My-Header'));\nconsole.log(response);\n```\n\n### Logging\n\n> [!IMPORTANT]\n> All log messages are intended for debugging only. The format and content of log messages\n> may change between releases.\n\n#### Log levels\n\nThe log level can be configured in two ways:\n\n1. Via the `YOLKEN_TEST6_LOG` environment variable\n2. Using the `logLevel` client option (overrides the environment variable if set)\n\n```ts\nimport YolkenTest6 from 'yolken-test6';\n\nconst client = new YolkenTest6({\n  logLevel: 'debug', // Show all log messages\n});\n```\n\nAvailable log levels, from most to least verbose:\n\n- `'debug'` - Show debug messages, info, warnings, and errors\n- `'info'` - Show info messages, warnings, and errors\n- `'warn'` - Show warnings and errors (default)\n- `'error'` - Show only errors\n- `'off'` - Disable all logging\n\nAt the `'debug'` level, all HTTP requests and responses are logged, including headers and bodies.\nSome authentication-related headers are redacted, but sensitive data in request and response bodies\nmay still be visible.\n\n#### Custom logger\n\nBy default, this library logs to `globalThis.console`. You can also provide a custom logger.\nMost logging libraries are supported, including [pino](https://www.npmjs.com/package/pino), [winston](https://www.npmjs.com/package/winston), [bunyan](https://www.npmjs.com/package/bunyan), [consola](https://www.npmjs.com/package/consola), [signale](https://www.npmjs.com/package/signale), and [@std/log](https://jsr.io/@std/log). If your logger doesn't work, please open an issue.\n\nWhen providing a custom logger, the `logLevel` option still controls which messages are emitted, messages\nbelow the configured level will not be sent to your logger.\n\n```ts\nimport YolkenTest6 from 'yolken-test6';\nimport pino from 'pino';\n\nconst logger = pino();\n\nconst client = new YolkenTest6({\n  logger: logger.child({ name: 'YolkenTest6' }),\n  logLevel: 'debug', // Send all messages to pino, allowing it to filter\n});\n```\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API. If you need to access undocumented\nendpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can use `client.get`, `client.post`, and other HTTP verbs.\nOptions on the client, such as retries, will be respected when making these requests.\n\n```ts\nawait client.post('/some/path', {\n  body: { some_prop: 'foo' },\n  query: { some_query_arg: 'bar' },\n});\n```\n\n#### Undocumented request params\n\nTo make requests using undocumented parameters, you may use `// @ts-expect-error` on the undocumented\nparameter. This library doesn't validate at runtime that the request matches the type, so any extra values you\nsend will be sent as-is.\n\n```ts\nclient.store.orders.create({\n  // ...\n  // @ts-expect-error baz is not yet public\n  baz: 'undocumented option',\n});\n```\n\nFor requests with the `GET` verb, any extra params will be in the query, all other requests will send the\nextra param in the body.\n\nIf you want to explicitly send an extra argument, you can do so with the `query`, `body`, and `headers` request\noptions.\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you may access the response object with `// @ts-expect-error` on\nthe response object, or cast the response object to the requisite type. Like the request params, we do not\nvalidate or strip extra properties from the response from the API.\n\n### Customizing the fetch client\n\nBy default, this library expects a global `fetch` function is defined.\n\nIf you want to use a different `fetch` function, you can either polyfill the global:\n\n```ts\nimport fetch from 'my-fetch';\n\nglobalThis.fetch = fetch;\n```\n\nOr pass it to the client:\n\n```ts\nimport YolkenTest6 from 'yolken-test6';\nimport fetch from 'my-fetch';\n\nconst client = new YolkenTest6({ fetch });\n```\n\n### Fetch options\n\nIf you want to set custom `fetch` options without overriding the `fetch` function, you can provide a `fetchOptions` object when instantiating the client or making a request. (Request-specific options override client options.)\n\n```ts\nimport YolkenTest6 from 'yolken-test6';\n\nconst client = new YolkenTest6({\n  fetchOptions: {\n    // `RequestInit` options\n  },\n});\n```\n\n#### Configuring proxies\n\nTo modify proxy behavior, you can provide custom `fetchOptions` that add runtime-specific proxy\noptions to requests:\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/node.svg\" align=\"top\" width=\"18\" height=\"21\"> **Node** <sup>[[docs](https://github.com/nodejs/undici/blob/main/docs/docs/api/ProxyAgent.md#example---proxyagent-with-fetch)]</sup>\n\n```ts\nimport YolkenTest6 from 'yolken-test6';\nimport * as undici from 'undici';\n\nconst proxyAgent = new undici.ProxyAgent('http://localhost:8888');\nconst client = new YolkenTest6({\n  fetchOptions: {\n    dispatcher: proxyAgent,\n  },\n});\n```\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/bun.svg\" align=\"top\" width=\"18\" height=\"21\"> **Bun** <sup>[[docs](https://bun.sh/guides/http/proxy)]</sup>\n\n```ts\nimport YolkenTest6 from 'yolken-test6';\n\nconst client = new YolkenTest6({\n  fetchOptions: {\n    proxy: 'http://localhost:8888',\n  },\n});\n```\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/deno.svg\" align=\"top\" width=\"18\" height=\"21\"> **Deno** <sup>[[docs](https://docs.deno.com/api/deno/~/Deno.createHttpClient)]</sup>\n\n```ts\nimport YolkenTest6 from 'npm:yolken-test6';\n\nconst httpClient = Deno.createHttpClient({ proxy: { url: 'http://localhost:8888' } });\nconst client = new YolkenTest6({\n  fetchOptions: {\n    client: httpClient,\n  },\n});\n```\n\n## Frequently Asked Questions\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes that only affect static types, without breaking runtime behavior.\n2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n3. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/stainless-sdks/yolken-test6-typescript/issues) with questions, bugs, or suggestions.\n\n## Requirements\n\nTypeScript >= 4.9 is supported.\n\nThe following runtimes are supported:\n\n- Web browsers (Up-to-date Chrome, Firefox, Safari, Edge, and more)\n- Node.js 20 LTS or later ([non-EOL](https://endoflife.date/nodejs)) versions.\n- Deno v1.28.0 or higher.\n- Bun 1.0 or later.\n- Cloudflare Workers.\n- Vercel Edge Runtime.\n- Jest 28 or greater with the `\"node\"` environment (`\"jsdom\"` is not supported at this time).\n- Nitro v2.6 or greater.\n\nNote that React Native is not supported at this time.\n\nIf you are interested in other runtime environments, please open or upvote an issue on GitHub.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n",
  },
  {
    language: 'java',
    content:
      '# Yolken Test6 Java API Library\n\n<!-- x-release-please-start-version -->\n[![Maven Central](https://img.shields.io/maven-central/v/com.yolken.api/yolken-test6-java)](https://central.sonatype.com/artifact/com.yolken.api/yolken-test6-java/0.0.1)\n[![javadoc](https://javadoc.io/badge2/com.yolken.api/yolken-test6-java/0.0.1/javadoc.svg)](https://javadoc.io/doc/com.yolken.api/yolken-test6-java/0.0.1)\n<!-- x-release-please-end -->\n\nThe Yolken Test6 Java SDK provides convenient access to the [Yolken Test6 REST API](http://example16.com)   from applications written in Java.\n\n\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Yolken Test6 MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=yolken-test6-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsInlvbGtlbi10ZXN0Ni1tY3AiXSwiZW52Ijp7IlBFVFNUT1JFX0FQSV9LRVkiOiJNeSBBUEkgS2V5In19)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22yolken-test6-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22yolken-test6-mcp%22%5D%2C%22env%22%3A%7B%22PETSTORE_API_KEY%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n<!-- x-release-please-start-version -->\n\nThe REST API documentation can be found on [example16.com](http://example16.com). Javadocs are available on [javadoc.io](https://javadoc.io/doc/com.yolken.api/yolken-test6-java/0.0.1).\n\n<!-- x-release-please-end -->\n\n## Installation\n\n<!-- x-release-please-start-version -->\n\n### Gradle\n\n~~~kotlin\nimplementation("com.yolken.api:yolken-test6-java:0.0.1")\n~~~\n\n### Maven\n\n~~~xml\n<dependency>\n  <groupId>com.yolken.api</groupId>\n  <artifactId>yolken-test6-java</artifactId>\n  <version>0.0.1</version>\n</dependency>\n~~~\n\n<!-- x-release-please-end -->\n\n## Requirements\n\nThis library requires Java 8 or later.\n\n## Usage\n\n```java\nimport com.yolken.api.client.YolkenTest6Client;\nimport com.yolken.api.client.okhttp.YolkenTest6OkHttpClient;\nimport com.yolken.api.models.Order;\nimport com.yolken.api.models.store.orders.OrderCreateParams;\n\n// Configures using the `yolkentest6.petstoreApiKey` and `yolkentest6.baseUrl` system properties\n// Or configures using the `PETSTORE_API_KEY` and `YOLKEN_TEST6_BASE_URL` environment variables\nYolkenTest6Client client = YolkenTest6OkHttpClient.fromEnv();\n\nOrder order = client.store().orders().create();\n```\n\n## Client configuration\n\nConfigure the client using system properties or environment variables:\n\n```java\nimport com.yolken.api.client.YolkenTest6Client;\nimport com.yolken.api.client.okhttp.YolkenTest6OkHttpClient;\n\n// Configures using the `yolkentest6.petstoreApiKey` and `yolkentest6.baseUrl` system properties\n// Or configures using the `PETSTORE_API_KEY` and `YOLKEN_TEST6_BASE_URL` environment variables\nYolkenTest6Client client = YolkenTest6OkHttpClient.fromEnv();\n```\n\nOr manually:\n\n```java\nimport com.yolken.api.client.YolkenTest6Client;\nimport com.yolken.api.client.okhttp.YolkenTest6OkHttpClient;\n\nYolkenTest6Client client = YolkenTest6OkHttpClient.builder()\n    .apiKey("My API Key")\n    .build();\n```\n\nOr using a combination of the two approaches:\n\n```java\nimport com.yolken.api.client.YolkenTest6Client;\nimport com.yolken.api.client.okhttp.YolkenTest6OkHttpClient;\n\nYolkenTest6Client client = YolkenTest6OkHttpClient.builder()\n    // Configures using the `yolkentest6.petstoreApiKey` and `yolkentest6.baseUrl` system properties\n    // Or configures using the `PETSTORE_API_KEY` and `YOLKEN_TEST6_BASE_URL` environment variables\n    .fromEnv()\n    .apiKey("My API Key")\n    .build();\n```\n\nSee this table for the available options:\n\n| Setter    | System property              | Environment variable    | Required | Default value                           |\n| --------- | ---------------------------- | ----------------------- | -------- | --------------------------------------- |\n| `apiKey`  | `yolkentest6.petstoreApiKey` | `PETSTORE_API_KEY`      | true     | -                                       |\n| `baseUrl` | `yolkentest6.baseUrl`        | `YOLKEN_TEST6_BASE_URL` | true     | `"https://petstore3.swagger.io/api/v3"` |\n\nSystem properties take precedence over environment variables.\n\n> [!TIP]\n> Don\'t create more than one client in the same application. Each client has a connection pool and\n> thread pools, which are more efficient to share between requests.\n\n### Modifying configuration\n\nTo temporarily use a modified client configuration, while reusing the same connection and thread       pools, call `withOptions()` on any client or service:\n\n```java\nimport com.yolken.api.client.YolkenTest6Client;\n\nYolkenTest6Client clientWithOptions = client.withOptions(optionsBuilder -> {\n    optionsBuilder.baseUrl("https://example.com");\n    optionsBuilder.maxRetries(42);\n});\n```\n\nThe `withOptions()` method does not affect the original client or service.\n\n## Requests and responses\n\nTo send a request to the Yolken Test6 API, build an instance of some `Params` class and pass it to the     corresponding client method. When the response is received, it will be deserialized into an instance of     a Java class.\n\nFor example, `client.store().orders().create(...)` should be called with an instance of `OrderCreateParams`, and it     will return an instance of `Order`.\n\n## Immutability\n\nEach class in the SDK has an associated   [builder](https://blogs.oracle.com/javamagazine/post/exploring-joshua-blochs-builder-design-pattern-in-java)   or factory method for constructing it.\n\nEach class is [immutable](https://docs.oracle.com/javase/tutorial/essential/concurrency/immutable.html)   once constructed. If the class has an associated builder, then it has a `toBuilder()` method, which can   be used to convert it back to a builder for making a modified copy.\n\nBecause each class is immutable, builder modification will _never_ affect already built class instances.\n\n## Asynchronous execution\n\nThe default client is synchronous. To switch to asynchronous execution, call the `async()` method:\n\n```java\nimport com.yolken.api.client.YolkenTest6Client;\nimport com.yolken.api.client.okhttp.YolkenTest6OkHttpClient;\nimport com.yolken.api.models.Order;\nimport com.yolken.api.models.store.orders.OrderCreateParams;\nimport java.util.concurrent.CompletableFuture;\n\n// Configures using the `yolkentest6.petstoreApiKey` and `yolkentest6.baseUrl` system properties\n// Or configures using the `PETSTORE_API_KEY` and `YOLKEN_TEST6_BASE_URL` environment variables\nYolkenTest6Client client = YolkenTest6OkHttpClient.fromEnv();\n\nCompletableFuture<Order> order = client.async().store().orders().create();\n```\n\nOr create an asynchronous client from the beginning:\n\n```java\nimport com.yolken.api.client.YolkenTest6ClientAsync;\nimport com.yolken.api.client.okhttp.YolkenTest6OkHttpClientAsync;\nimport com.yolken.api.models.Order;\nimport com.yolken.api.models.store.orders.OrderCreateParams;\nimport java.util.concurrent.CompletableFuture;\n\n// Configures using the `yolkentest6.petstoreApiKey` and `yolkentest6.baseUrl` system properties\n// Or configures using the `PETSTORE_API_KEY` and `YOLKEN_TEST6_BASE_URL` environment variables\nYolkenTest6ClientAsync client = YolkenTest6OkHttpClientAsync.fromEnv();\n\nCompletableFuture<Order> order = client.store().orders().create();\n```\n\nThe asynchronous client supports the same options as the synchronous one, except most methods return `CompletableFuture`s.\n\n\n\n\n\n\n\n## Raw responses\n\nThe SDK defines methods that deserialize responses into instances of Java classes.       However, these methods don\'t provide access to the response headers, status code, or the raw response       body.\n\nTo access this data, prefix any HTTP method call on a client or service with `withRawResponse()`:\n\n```java\nimport com.yolken.api.core.http.Headers;\nimport com.yolken.api.core.http.HttpResponseFor;\nimport com.yolken.api.models.store.StoreListInventoryParams;\nimport com.yolken.api.models.store.StoreListInventoryResponse;\n\nHttpResponseFor<StoreListInventoryResponse> response = client.store().withRawResponse().listInventory();\n\nint statusCode = response.statusCode();\nHeaders headers = response.headers();\n```\n\nYou can still deserialize the response into an instance of a Java class if needed:\n\n```java\nimport com.yolken.api.models.store.StoreListInventoryResponse;\n\nStoreListInventoryResponse parsedResponse = response.parse();\n```\n\n## Error handling\n\nThe SDK throws custom unchecked exception types:\n\n- [`YolkenTest6ServiceException`](yolken-test6-java-core/src/main/kotlin/com/yolken/api/errors/YolkenTest6ServiceException.kt): Base class for HTTP errors. See this table for which exception       subclass is thrown for each HTTP status code:\n\n  | Status | Exception                                          |\n  | ------ | -------------------------------------------------- |\n  | 400    | [`BadRequestException`](yolken-test6-java-core/src/main/kotlin/com/yolken/api/errors/BadRequestException.kt)           |\n  | 401    | [`UnauthorizedException`](yolken-test6-java-core/src/main/kotlin/com/yolken/api/errors/UnauthorizedException.kt)         |\n  | 403    | [`PermissionDeniedException`](yolken-test6-java-core/src/main/kotlin/com/yolken/api/errors/PermissionDeniedException.kt)     |\n  | 404    | [`NotFoundException`](yolken-test6-java-core/src/main/kotlin/com/yolken/api/errors/NotFoundException.kt)             |\n  | 422    | [`UnprocessableEntityException`](yolken-test6-java-core/src/main/kotlin/com/yolken/api/errors/UnprocessableEntityException.kt)  |\n  | 429    | [`RateLimitException`](yolken-test6-java-core/src/main/kotlin/com/yolken/api/errors/RateLimitException.kt)            |\n  | 5xx    | [`InternalServerException`](yolken-test6-java-core/src/main/kotlin/com/yolken/api/errors/InternalServerException.kt)       |\n  | others | [`UnexpectedStatusCodeException`](yolken-test6-java-core/src/main/kotlin/com/yolken/api/errors/UnexpectedStatusCodeException.kt) |\n\n- [`YolkenTest6IoException`](yolken-test6-java-core/src/main/kotlin/com/yolken/api/errors/YolkenTest6IoException.kt): I/O networking errors.\n\n- [`YolkenTest6RetryableException`](yolken-test6-java-core/src/main/kotlin/com/yolken/api/errors/YolkenTest6RetryableException.kt): Generic error indicating a failure that could be retried by the client.\n\n- [`YolkenTest6InvalidDataException`](yolken-test6-java-core/src/main/kotlin/com/yolken/api/errors/YolkenTest6InvalidDataException.kt): Failure to interpret successfully parsed data. For example,       when accessing a property that\'s supposed to be required, but the API unexpectedly omitted it from the       response.\n\n- [`YolkenTest6Exception`](yolken-test6-java-core/src/main/kotlin/com/yolken/api/errors/YolkenTest6Exception.kt): Base class for all exceptions. Most errors will result in one of the       previously mentioned ones, but completely generic errors may be thrown using the base class.\n\n\n\n## Logging\n\nThe SDK uses the standard   [OkHttp logging interceptor](https://github.com/square/okhttp/tree/master/okhttp-logging-interceptor).\n\nEnable logging by setting the `YOLKEN_TEST6_LOG` environment variable to   `info`:\n\n```sh\nexport YOLKEN_TEST6_LOG=info\n```\n\nOr to `debug` for more verbose logging:\n\n```sh\nexport YOLKEN_TEST6_LOG=debug\n```\n\n## ProGuard and R8\n\nAlthough the SDK uses reflection, it is still usable with     [ProGuard](https://github.com/Guardsquare/proguard) and     [R8](https://developer.android.com/topic/performance/app-optimization/enable-app-optimization) because     `yolken-test6-java-core` is published with a     [configuration file](yolken-test6-java-core/src/main/resources/META-INF/proguard/yolken-test6-java-core.pro) containing     [keep rules](https://www.guardsquare.com/manual/configuration/usage).\n\nProGuard and R8 should automatically detect and use the published rules, but you can also manually copy     the keep rules if necessary.\n\n\n\n\n\n## Jackson\n\nThe SDK depends on [Jackson](https://github.com/FasterXML/jackson) for JSON     serialization/deserialization. It is compatible with version 2.13.4 or higher,     but depends on version 2.18.2 by default.\n\nThe SDK throws an exception if it detects an incompatible Jackson version at runtime (e.g. if the     default version was overridden in your Maven or Gradle config).\n\nIf the SDK threw an exception, but you\'re _certain_ the version is compatible, then disable the version     check using the `checkJacksonVersionCompatibility` on [`YolkenTest6OkHttpClient`](yolken-test6-java-client-okhttp/src/main/kotlin/com/yolken/api/client/okhttp/YolkenTest6OkHttpClient.kt) or     [`YolkenTest6OkHttpClientAsync`](yolken-test6-java-client-okhttp/src/main/kotlin/com/yolken/api/client/okhttp/YolkenTest6OkHttpClientAsync.kt).\n\n> [!CAUTION]\n> We make no guarantee that the SDK works correctly when the Jackson version check is disabled.\n\nAlso note that there are bugs in older Jackson versions that can affect the SDK. We don\'t work around all     Jackson bugs ([example](https://github.com/FasterXML/jackson-databind/issues/3240)) and expect users to     upgrade Jackson for those instead.\n\n## Network options\n\n### Retries\n\nThe SDK automatically retries 2 times by default, with a short exponential backoff between requests.\n\nOnly the following error types are retried:\n- Connection errors (for example, due to a network connectivity problem)\n- 408 Request Timeout\n- 409 Conflict\n- 429 Rate Limit\n- 5xx Internal\n\nThe API may also explicitly instruct the SDK to retry or not retry a request.\n\nTo set a custom number of retries, configure the client using the `maxRetries` method:\n\n```java\nimport com.yolken.api.client.YolkenTest6Client;\nimport com.yolken.api.client.okhttp.YolkenTest6OkHttpClient;\n\nYolkenTest6Client client = YolkenTest6OkHttpClient.builder()\n    .fromEnv()\n    .maxRetries(4)\n    .build();\n```\n\n### Timeouts\n\nRequests time out after 1 minute by default.\n\nTo set a custom timeout, configure the method call using the `timeout` method:\n\n```java\nimport com.yolken.api.models.store.StoreListInventoryResponse;\n\nStoreListInventoryResponse response = client.store().listInventory(RequestOptions.builder().timeout(Duration.ofSeconds(30)).build());\n```\n\nOr configure the default for all method calls at the client level:\n\n```java\nimport com.yolken.api.client.YolkenTest6Client;\nimport com.yolken.api.client.okhttp.YolkenTest6OkHttpClient;\nimport java.time.Duration;\n\nYolkenTest6Client client = YolkenTest6OkHttpClient.builder()\n    .fromEnv()\n    .timeout(Duration.ofSeconds(30))\n    .build();\n```\n\n### Proxies\n\nTo route requests through a proxy, configure the client using the `proxy` method:\n\n```java\nimport com.yolken.api.client.YolkenTest6Client;\nimport com.yolken.api.client.okhttp.YolkenTest6OkHttpClient;\nimport java.net.InetSocketAddress;\nimport java.net.Proxy;\n\nYolkenTest6Client client = YolkenTest6OkHttpClient.builder()\n    .fromEnv()\n    .proxy(new Proxy(\n      Proxy.Type.HTTP, new InetSocketAddress(\n        "https://example.com", 8080\n      )\n    ))\n    .build();\n```\n\n### Connection pooling\n\nTo customize the underlying OkHttp connection pool, configure the client using the   `maxIdleConnections` and `keepAliveDuration` methods:\n\n```java\nimport com.yolken.api.client.YolkenTest6Client;\nimport com.yolken.api.client.okhttp.YolkenTest6OkHttpClient;\nimport java.time.Duration;\n\nYolkenTest6Client client = YolkenTest6OkHttpClient.builder()\n    .fromEnv()\n    // If `maxIdleConnections` is set, then `keepAliveDuration` must be set, and vice versa.\n    .maxIdleConnections(10)\n    .keepAliveDuration(Duration.ofMinutes(2))\n    .build();\n```\n\nIf both options are unset, OkHttp\'s default connection pool settings are used.\n\n### HTTPS\n\n> [!NOTE]\n> Most applications should not call these methods, and instead use the system defaults. The defaults include\n> special optimizations that can be lost if the implementations are modified.\n\nTo configure how HTTPS connections are secured, configure the client using the `sslSocketFactory`,   `trustManager`, and `hostnameVerifier` methods:\n\n```java\nimport com.yolken.api.client.YolkenTest6Client;\nimport com.yolken.api.client.okhttp.YolkenTest6OkHttpClient;\n\nYolkenTest6Client client = YolkenTest6OkHttpClient.builder()\n    .fromEnv()\n    // If `sslSocketFactory` is set, then `trustManager` must be set, and vice versa.\n    .sslSocketFactory(yourSSLSocketFactory)\n    .trustManager(yourTrustManager)\n    .hostnameVerifier(yourHostnameVerifier)\n    .build();\n```\n\n\n\n### Custom HTTP client\n\nThe SDK consists of three artifacts:\n- `yolken-test6-java-core`\n  - Contains core SDK logic\n  - Does not depend on [OkHttp](https://square.github.io/okhttp)\n  - Exposes [`YolkenTest6Client`](yolken-test6-java-core/src/main/kotlin/com/yolken/api/client/YolkenTest6Client.kt), [`YolkenTest6ClientAsync`](yolken-test6-java-core/src/main/kotlin/com/yolken/api/client/YolkenTest6ClientAsync.kt),             [`YolkenTest6ClientImpl`](yolken-test6-java-core/src/main/kotlin/com/yolken/api/client/YolkenTest6ClientImpl.kt), and [`YolkenTest6ClientAsyncImpl`](yolken-test6-java-core/src/main/kotlin/com/yolken/api/client/YolkenTest6ClientAsyncImpl.kt), all of which can             work with any HTTP client\n- `yolken-test6-java-client-okhttp`\n  - Depends on [OkHttp](https://square.github.io/okhttp)\n  - Exposes [`YolkenTest6OkHttpClient`](yolken-test6-java-client-okhttp/src/main/kotlin/com/yolken/api/client/okhttp/YolkenTest6OkHttpClient.kt) and [`YolkenTest6OkHttpClientAsync`](yolken-test6-java-client-okhttp/src/main/kotlin/com/yolken/api/client/okhttp/YolkenTest6OkHttpClientAsync.kt), which             provide a way to construct [`YolkenTest6ClientImpl`](yolken-test6-java-core/src/main/kotlin/com/yolken/api/client/YolkenTest6ClientImpl.kt) and             [`YolkenTest6ClientAsyncImpl`](yolken-test6-java-core/src/main/kotlin/com/yolken/api/client/YolkenTest6ClientAsyncImpl.kt), respectively, using OkHttp\n- `yolken-test6-java`\n  - Depends on and exposes the APIs of both `yolken-test6-java-core` and `yolken-test6-java-client-okhttp`\n  - Does not have its own logic\n\nThis structure allows replacing the SDK\'s default HTTP client without pulling in unnecessary dependencies.\n\n#### Customized [`OkHttpClient`](https://square.github.io/okhttp/3.x/okhttp/okhttp3/OkHttpClient.html)\n\n> [!TIP]\n> Try the available [network options](#network-options) before replacing the default client.\n\nTo use a customized `OkHttpClient`:\n\n1. Replace your [`yolken-test6-java` dependency](#installation) with `yolken-test6-java-core`\n2. Copy `yolken-test6-java-client-okhttp`\'s [`OkHttpClient`](yolken-test6-java-client-okhttp/src/main/kotlin/com/yolken/api/client/okhttp/OkHttpClient.kt) class into your code and        customize it\n3. Construct [`YolkenTest6ClientImpl`](yolken-test6-java-core/src/main/kotlin/com/yolken/api/client/YolkenTest6ClientImpl.kt) or [`YolkenTest6ClientAsyncImpl`](yolken-test6-java-core/src/main/kotlin/com/yolken/api/client/YolkenTest6ClientAsyncImpl.kt), similarly to        [`YolkenTest6OkHttpClient`](yolken-test6-java-client-okhttp/src/main/kotlin/com/yolken/api/client/okhttp/YolkenTest6OkHttpClient.kt) or [`YolkenTest6OkHttpClientAsync`](yolken-test6-java-client-okhttp/src/main/kotlin/com/yolken/api/client/okhttp/YolkenTest6OkHttpClientAsync.kt), using your        customized client\n\n### Completely custom HTTP client\n\nTo use a completely custom HTTP client:\n\n1. Replace your [`yolken-test6-java` dependency](#installation) with `yolken-test6-java-core`\n2. Write a class that implements the [`HttpClient`](yolken-test6-java-core/src/main/kotlin/com/yolken/api/core/http/HttpClient.kt) interface\n3. Construct [`YolkenTest6ClientImpl`](yolken-test6-java-core/src/main/kotlin/com/yolken/api/client/YolkenTest6ClientImpl.kt) or [`YolkenTest6ClientAsyncImpl`](yolken-test6-java-core/src/main/kotlin/com/yolken/api/client/YolkenTest6ClientAsyncImpl.kt), similarly to        [`YolkenTest6OkHttpClient`](yolken-test6-java-client-okhttp/src/main/kotlin/com/yolken/api/client/okhttp/YolkenTest6OkHttpClient.kt) or [`YolkenTest6OkHttpClientAsync`](yolken-test6-java-client-okhttp/src/main/kotlin/com/yolken/api/client/okhttp/YolkenTest6OkHttpClientAsync.kt), using your new        client class\n\n## Undocumented API functionality\n\nThe SDK is typed for convenient usage of the documented API. However, it also supports working with undocumented or not yet supported parts of the API.\n\n### Parameters\n\nTo set undocumented parameters, call the `putAdditionalHeader`, `putAdditionalQueryParam`, or       `putAdditionalBodyProperty` methods on any `Params` class:\n\n```java\nimport com.yolken.api.core.JsonValue;\nimport com.yolken.api.models.store.orders.OrderCreateParams;\n\nOrderCreateParams params = OrderCreateParams.builder()\n    .putAdditionalHeader("Secret-Header", "42")\n    .putAdditionalQueryParam("secret_query_param", "42")\n    .putAdditionalBodyProperty("secretProperty", JsonValue.from("42"))\n    .build();\n```\n\nThese can be accessed on the built object later using the `_additionalHeaders()`,       `_additionalQueryParams()`, and `_additionalBodyProperties()` methods.\n\nTo set a documented parameter or property to an undocumented or not yet supported _value_, pass a       [`JsonValue`](yolken-test6-java-core/src/main/kotlin/com/yolken/api/core/Values.kt) object to its setter:\n\n```java\nimport com.yolken.api.models.store.orders.OrderCreateParams;\n\nOrderCreateParams params = OrderCreateParams.builder().build();\n```\n\nThe most straightforward way to create a [`JsonValue`](yolken-test6-java-core/src/main/kotlin/com/yolken/api/core/Values.kt) is using its       `from(...)` method:\n\n```java\nimport com.yolken.api.core.JsonValue;\nimport java.util.List;\nimport java.util.Map;\n\n// Create primitive JSON values\nJsonValue nullValue = JsonValue.from(null);\nJsonValue booleanValue = JsonValue.from(true);\nJsonValue numberValue = JsonValue.from(42);\nJsonValue stringValue = JsonValue.from("Hello World!");\n\n// Create a JSON array value equivalent to `["Hello", "World"]`\nJsonValue arrayValue = JsonValue.from(List.of(\n  "Hello", "World"\n));\n\n// Create a JSON object value equivalent to `{ "a": 1, "b": 2 }`\nJsonValue objectValue = JsonValue.from(Map.of(\n  "a", 1,\n  "b", 2\n));\n\n// Create an arbitrarily nested JSON equivalent to:\n// {\n//   "a": [1, 2],\n//   "b": [3, 4]\n// }\nJsonValue complexValue = JsonValue.from(Map.of(\n  "a", List.of(\n    1, 2\n  ),\n  "b", List.of(\n    3, 4\n  )\n));\n```\n\nNormally a `Builder` class\'s `build` method will throw         [`IllegalStateException`](https://docs.oracle.com/javase/8/docs/api/java/lang/IllegalStateException.html)         if any required parameter or property is unset.\n\nTo forcibly omit a required parameter or property, pass [`JsonMissing`](yolken-test6-java-core/src/main/kotlin/com/yolken/api/core/Values.kt):\n\n```java\nimport com.yolken.api.core.JsonMissing;\nimport com.yolken.api.models.pets.Pet;\nimport com.yolken.api.models.pets.PetCreateParams;\nimport com.yolken.api.models.store.orders.OrderCreateParams;\n\nOrderCreateParams params = PetCreateParams.builder()\n    .pet(Pet.builder()\n        .name("doggie")\n        .addPhotoUrl("string")\n        .build())\n    .name(JsonMissing.of())\n    .build();\n```\n\n### Response properties\n\nTo access undocumented response properties, call the `_additionalProperties()` method:\n\n```java\nimport com.yolken.api.core.JsonValue;\nimport java.util.Map;\n\nMap<String, JsonValue> additionalProperties = client.store().orders().create(params)._additionalProperties();\nJsonValue secretPropertyValue = additionalProperties.get("secretProperty");\n\nString result = secretPropertyValue.accept(new JsonValue.Visitor<>() {\n    @Override\n    public String visitNull() {\n        return "It\'s null!";\n    }\n\n    @Override\n    public String visitBoolean(boolean value) {\n        return "It\'s a boolean!";\n    }\n\n    @Override\n    public String visitNumber(Number value) {\n        return "It\'s a number!";\n    }\n\n    // Other methods include `visitMissing`, `visitString`, `visitArray`, and `visitObject`\n    // The default implementation of each unimplemented method delegates to `visitDefault`, which throws by default, but can also be overridden\n});\n```\n\nTo access a property\'s raw JSON value, which may be undocumented, call its `_` prefixed method:\n\n```java\nimport com.yolken.api.core.JsonField;\nimport java.util.Optional;\n\nJsonField<Object> field = client.store().orders().create(params)._field();\n\nif (field.isMissing()) {\n  // The property is absent from the JSON response\n} else if (field.isNull()) {\n  // The property was set to literal null\n} else {\n  // Check if value was provided as a string\n  // Other methods include `asNumber()`, `asBoolean()`, etc.\n  Optional<String> jsonString = field.asString();\n\n  // Try to deserialize into a custom type\n  MyClass myObject = field.asUnknown().orElseThrow().convert(MyClass.class);\n}\n```\n\n### Response validation\n\nIn rare cases, the API may return a response that doesn\'t match the expected type. For example, the SDK     may expect a property to contain a `String`, but the API could return something else.\n\nBy default, the SDK will not throw an exception in this case. It will throw     [`YolkenTest6InvalidDataException`](yolken-test6-java-core/src/main/kotlin/com/yolken/api/errors/YolkenTest6InvalidDataException.kt) only if you directly access the property.\n\nIf you would prefer to check that the response is completely well-typed upfront, then either call     `validate()`:\n\n```java\nimport com.yolken.api.models.Order;\n\nOrder order = client.store().orders().create(params).validate();\n```\n\nOr configure the method call to validate the response using the `responseValidation` method:\n\n```java\nimport com.yolken.api.models.Order;\n\nOrder order = client.store().orders().create(RequestOptions.builder().responseValidation(true).build());\n```\n\nOr configure the default for all method calls at the client level:\n\n```java\nimport com.yolken.api.client.YolkenTest6Client;\nimport com.yolken.api.client.okhttp.YolkenTest6OkHttpClient;\n\nYolkenTest6Client client = YolkenTest6OkHttpClient.builder()\n    .fromEnv()\n    .responseValidation(true)\n    .build();\n```\n\n## FAQ\n\n### Why don\'t you use plain `enum` classes?\n\nJava `enum` classes are not trivially   [forwards compatible](https://www.stainless.com/blog/making-java-enums-forwards-compatible). Using them in   the SDK could cause runtime exceptions if the API is updated to respond with a new enum value.\n\n### Why do you represent fields using `JsonField<T>` instead of just plain `T`?\n\nUsing `JsonField<T>` enables a few features:\n\n- Allowing usage of [undocumented API functionality](#undocumented-api-functionality)\n- Lazily [validating the API response against the expected shape](#response-validation)\n- Representing absent vs explicitly null values\n\n### Why don\'t you use [`data` classes](https://kotlinlang.org/docs/data-classes.html)?\n\nIt is not [backwards compatible to add new fields to a data class](https://kotlinlang.org/docs/api-guidelines-backward-compatibility.html#avoid-using-data-classes-in-your-api)   and we don\'t want to introduce a breaking change every time we add a field to a class.\n\n### Why don\'t you use checked exceptions?\n\nChecked exceptions are widely considered a mistake in the Java programming language. In fact, they were   omitted from Kotlin for this reason.\n\nChecked exceptions:\n\n- Are verbose to handle\n- Encourage error handling at the wrong level of abstraction, where nothing can be done about the error\n- Are tedious to propagate due to the [function coloring problem](https://journal.stuffwithstuff.com/2015/02/01/what-color-is-your-function)\n- Don\'t play well with lambdas (also due to the function coloring problem)\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n2. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/yolken/yolken-test6-java/issues) with questions, bugs, or suggestions.\n',
  },
];

const INDEX_OPTIONS = {
  fields: [
    'name',
    'endpoint',
    'summary',
    'description',
    'qualified',
    'stainlessPath',
    'content',
    'sectionContext',
  ],
  storeFields: ['kind', '_original'],
  searchOptions: {
    prefix: true,
    fuzzy: 0.1,
    boost: {
      name: 5,
      stainlessPath: 3,
      endpoint: 3,
      qualified: 3,
      summary: 2,
      content: 1,
      description: 1,
    } as Record<string, number>,
  },
};

/**
 * Self-contained local search engine backed by MiniSearch.
 * Method data is embedded at SDK build time; prose documents
 * can be loaded from an optional docs directory at runtime.
 */
export class LocalDocsSearch {
  private methodIndex: MiniSearch<MiniSearchDocument>;
  private proseIndex: MiniSearch<MiniSearchDocument>;

  private constructor() {
    this.methodIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
    this.proseIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
  }

  static async create(opts?: { docsDir?: string }): Promise<LocalDocsSearch> {
    const instance = new LocalDocsSearch();
    instance.indexMethods(EMBEDDED_METHODS);
    for (const readme of EMBEDDED_READMES) {
      instance.indexProse(readme.content, `readme:${readme.language}`);
    }
    if (opts?.docsDir) {
      await instance.loadDocsDirectory(opts.docsDir);
    }
    return instance;
  }

  search(props: {
    query: string;
    language?: string;
    detail?: string;
    maxResults?: number;
    maxLength?: number;
  }): SearchResult {
    const { query, language = 'typescript', detail = 'default', maxResults = 5, maxLength = 100_000 } = props;

    const useMarkdown = detail === 'verbose' || detail === 'high';

    // Search both indices and merge results by score.
    // Filter prose hits so language-tagged content (READMEs and docs with
    // frontmatter) only matches the requested language.
    const methodHits = this.methodIndex
      .search(query)
      .map((hit) => ({ ...hit, _kind: 'http_method' as const }));
    const proseHits = this.proseIndex
      .search(query)
      .filter((hit) => {
        const source = ((hit as Record<string, unknown>)['_original'] as ProseChunk | undefined)?.source;
        if (!source) return true;
        // Check for language-tagged sources: "readme:<lang>" or "lang:<lang>:<filename>"
        let taggedLang: string | undefined;
        if (source.startsWith('readme:')) taggedLang = source.slice('readme:'.length);
        else if (source.startsWith('lang:')) taggedLang = source.split(':')[1];
        if (!taggedLang) return true;
        return taggedLang === language || (language === 'javascript' && taggedLang === 'typescript');
      })
      .map((hit) => ({ ...hit, _kind: 'prose' as const }));
    const merged = [...methodHits, ...proseHits].sort((a, b) => b.score - a.score);
    const top = merged.slice(0, maxResults);

    const fullResults: (string | Record<string, unknown>)[] = [];

    for (const hit of top) {
      const original = (hit as Record<string, unknown>)['_original'];
      if (hit._kind === 'http_method') {
        const m = original as MethodEntry;
        if (useMarkdown && m.markdown) {
          fullResults.push(m.markdown);
        } else {
          // Use per-language data when available, falling back to the
          // top-level fields (which are TypeScript-specific in the
          // legacy codepath).
          const langData = m.perLanguage?.[language];
          fullResults.push({
            method: langData?.method ?? m.qualified,
            summary: m.summary,
            description: m.description,
            endpoint: `${m.httpMethod.toUpperCase()} ${m.endpoint}`,
            ...(langData?.example ? { example: langData.example } : {}),
            ...(m.params ? { params: m.params } : {}),
            ...(m.response ? { response: m.response } : {}),
          });
        }
      } else {
        const c = original as ProseChunk;
        fullResults.push({
          content: c.content,
          ...(c.source ? { source: c.source } : {}),
        });
      }
    }

    let totalLength = 0;
    const results: (string | Record<string, unknown>)[] = [];
    for (const result of fullResults) {
      const len = typeof result === 'string' ? result.length : JSON.stringify(result).length;
      totalLength += len;
      if (totalLength > maxLength) break;
      results.push(result);
    }

    if (results.length < fullResults.length) {
      results.unshift(`Truncated; showing ${results.length} of ${fullResults.length} results.`);
    }

    return { results };
  }

  private indexMethods(methods: MethodEntry[]): void {
    const docs: MiniSearchDocument[] = methods.map((m, i) => ({
      id: `method-${i}`,
      kind: 'http_method' as const,
      name: m.name,
      endpoint: m.endpoint,
      summary: m.summary,
      description: m.description,
      qualified: m.qualified,
      stainlessPath: m.stainlessPath,
      _original: m as unknown as Record<string, unknown>,
    }));
    if (docs.length > 0) {
      this.methodIndex.addAll(docs);
    }
  }

  private async loadDocsDirectory(docsDir: string): Promise<void> {
    let entries;
    try {
      entries = await fs.readdir(docsDir, { withFileTypes: true });
    } catch (err) {
      getLogger().warn({ err, docsDir }, 'Could not read docs directory');
      return;
    }

    const files = entries
      .filter((e) => e.isFile())
      .filter((e) => e.name.endsWith('.md') || e.name.endsWith('.markdown') || e.name.endsWith('.json'));

    for (const file of files) {
      try {
        const filePath = path.join(docsDir, file.name);
        const content = await fs.readFile(filePath, 'utf-8');

        if (file.name.endsWith('.json')) {
          const texts = extractTexts(JSON.parse(content));
          if (texts.length > 0) {
            this.indexProse(texts.join('\n\n'), file.name);
          }
        } else {
          // Parse optional YAML frontmatter for language tagging.
          // Files with a "language" field in frontmatter will only
          // surface in searches for that language.
          //
          // Example:
          //   ---
          //   language: python
          //   ---
          //   # Error handling in Python
          //   ...
          const frontmatter = parseFrontmatter(content);
          const source = frontmatter.language ? `lang:${frontmatter.language}:${file.name}` : file.name;
          this.indexProse(content, source);
        }
      } catch (err) {
        getLogger().warn({ err, file: file.name }, 'Failed to index docs file');
      }
    }
  }

  private indexProse(markdown: string, source: string): void {
    const chunks = chunkMarkdown(markdown);
    const baseId = this.proseIndex.documentCount;

    const docs: MiniSearchDocument[] = chunks.map((chunk, i) => ({
      id: `prose-${baseId + i}`,
      kind: 'prose' as const,
      content: chunk.content,
      ...(chunk.sectionContext != null ? { sectionContext: chunk.sectionContext } : {}),
      _original: { ...chunk, source } as unknown as Record<string, unknown>,
    }));

    if (docs.length > 0) {
      this.proseIndex.addAll(docs);
    }
  }
}

/** Lightweight markdown chunker — splits on headers, chunks by word count. */
function chunkMarkdown(markdown: string): { content: string; tag: string; sectionContext?: string }[] {
  // Strip YAML frontmatter
  const stripped = markdown.replace(/^---\n[\s\S]*?\n---\n?/, '');
  const lines = stripped.split('\n');

  const chunks: { content: string; tag: string; sectionContext?: string }[] = [];
  const headers: string[] = [];
  let current: string[] = [];

  const flush = () => {
    const text = current.join('\n').trim();
    if (!text) return;
    const sectionContext = headers.length > 0 ? headers.join(' > ') : undefined;
    // Split into ~200-word chunks
    const words = text.split(/\s+/);
    for (let i = 0; i < words.length; i += 200) {
      const slice = words.slice(i, i + 200).join(' ');
      if (slice) {
        chunks.push({ content: slice, tag: 'p', ...(sectionContext != null ? { sectionContext } : {}) });
      }
    }
    current = [];
  };

  for (const line of lines) {
    const headerMatch = line.match(/^(#{1,6})\s+(.+)/);
    if (headerMatch) {
      flush();
      const level = headerMatch[1]!.length;
      const text = headerMatch[2]!.trim();
      while (headers.length >= level) headers.pop();
      headers.push(text);
    } else {
      current.push(line);
    }
  }
  flush();

  return chunks;
}

/** Recursively extracts string values from a JSON structure. */
function extractTexts(data: unknown, depth = 0): string[] {
  if (depth > 10) return [];
  if (typeof data === 'string') return data.trim() ? [data] : [];
  if (Array.isArray(data)) return data.flatMap((item) => extractTexts(item, depth + 1));
  if (typeof data === 'object' && data !== null) {
    return Object.values(data).flatMap((v) => extractTexts(v, depth + 1));
  }
  return [];
}

/** Parses YAML frontmatter from a markdown string, extracting the language field if present. */
function parseFrontmatter(markdown: string): { language?: string } {
  const match = markdown.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const body = match[1] ?? '';
  const langMatch = body.match(/^language:\s*(.+)$/m);
  return langMatch ? { language: langMatch[1]!.trim() } : {};
}
