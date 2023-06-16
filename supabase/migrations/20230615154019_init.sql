create type "public"."roles" as enum ('ARTIST', 'PROD_OWNER');

create table "public"."account" (
    "id" uuid not null default gen_random_uuid(),
    "userId" uuid not null,
    "type" text not null,
    "provider" text not null,
    "providerAccountId" text not null,
    "refresh_token" text,
    "access_token" text,
    "expires_at" integer,
    "token_type" text,
    "scope" text,
    "id_token" text,
    "session_state" text
);


create table "public"."prev_projects" (
    "id" uuid not null default gen_random_uuid(),
    "project_name" text not null,
    "production_name" text not null,
    "link" text not null,
    "technician_role" text not null,
    "released_date" text not null
);


create table "public"."productionProfiles" (
    "id" uuid not null default gen_random_uuid(),
    "title" text not null,
    "address" text not null,
    "no_of_shooting_days" integer not null,
    "created_at" timestamp(3) without time zone not null default now(),
    "updated_at" timestamp(3) without time zone not null default now(),
    "release_date" timestamp(3) without time zone not null,
    "payment_provided" boolean not null,
    "restrictions" text not null,
    "poster" text not null,
    "budget" integer not null,
    "artistsId" uuid,
    "gener_on_prod" text[]
);


create table "public"."session" (
    "id" uuid not null default gen_random_uuid(),
    "sessionToken" text not null,
    "userId" uuid not null,
    "expires" timestamp(3) without time zone not null
);


create table "public"."user" (
    "id" uuid not null default gen_random_uuid(),
    "email" text,
    "emailVerified" timestamp(3) without time zone,
    "image" text,
    "name" text not null,
    "isNewUser" boolean not null default true,
    "date_of_birth" text,
    "password" text,
    "phone_no" text,
    "age" integer,
    "address" text,
    "physical_details" text,
    "expected_payment" boolean default true,
    "id_proof" text,
    "role_type" roles default 'ARTIST'::roles,
    "as" text default 'Actor'::text,
    "favourites" text[],
    "skills" text[],
    "about" text
);


CREATE UNIQUE INDEX account_pkey ON public.account USING btree (id);

CREATE UNIQUE INDEX "account_provider_providerAccountId_key" ON public.account USING btree (provider, "providerAccountId");

CREATE UNIQUE INDEX prev_projects_pkey ON public.prev_projects USING btree (id);

CREATE UNIQUE INDEX "productionProfiles_pkey" ON public."productionProfiles" USING btree (id);

CREATE UNIQUE INDEX session_pkey ON public.session USING btree (id);

CREATE UNIQUE INDEX "session_sessionToken_key" ON public.session USING btree ("sessionToken");

CREATE UNIQUE INDEX user_email_key ON public."user" USING btree (email);

CREATE INDEX user_id_idx ON public."user" USING btree (id);

CREATE UNIQUE INDEX user_pkey ON public."user" USING btree (id);

alter table "public"."account" add constraint "account_pkey" PRIMARY KEY using index "account_pkey";

alter table "public"."prev_projects" add constraint "prev_projects_pkey" PRIMARY KEY using index "prev_projects_pkey";

alter table "public"."productionProfiles" add constraint "productionProfiles_pkey" PRIMARY KEY using index "productionProfiles_pkey";

alter table "public"."session" add constraint "session_pkey" PRIMARY KEY using index "session_pkey";

alter table "public"."user" add constraint "user_pkey" PRIMARY KEY using index "user_pkey";

alter table "public"."account" add constraint "account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"(id) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."account" validate constraint "account_userId_fkey";

alter table "public"."productionProfiles" add constraint "productionProfiles_artistsId_fkey" FOREIGN KEY ("artistsId") REFERENCES "user"(id) ON UPDATE CASCADE ON DELETE SET NULL not valid;

alter table "public"."productionProfiles" validate constraint "productionProfiles_artistsId_fkey";

alter table "public"."session" add constraint "session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"(id) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."session" validate constraint "session_userId_fkey";


create policy "Enable read access for all users"
on "storage"."buckets"
as permissive
for select
to anon
using (true);


create policy "any 1sk75qe_0"
on "storage"."objects"
as permissive
for select
to anon
using ((bucket_id = 'posters'::text));


create policy "any 1sk75qe_1"
on "storage"."objects"
as permissive
for insert
to anon
with check ((bucket_id = 'posters'::text));


create policy "any 1sk75qe_2"
on "storage"."objects"
as permissive
for update
to anon
using ((bucket_id = 'posters'::text));


create policy "any 1sk75qe_3"
on "storage"."objects"
as permissive
for delete
to anon
using ((bucket_id = 'posters'::text));


create policy "any one can insert delete 1sk75qe_0"
on "storage"."objects"
as permissive
for select
to anon
using (true);


create policy "anyone can read 1sk75qe_0"
on "storage"."objects"
as permissive
for select
to public
using (true);


create policy "anyone can read access 1sk75qe_0"
on "storage"."objects"
as permissive
for select
to anon
using (true);



