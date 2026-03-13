# Webhook Subscription Events & Automation Patterns

## Available Subscription Events

Pixelesq webhooks can trigger on these events:

### Page events
- `page.created` -- a new page is created
- `page.saved` -- page content is saved (draft update)
- `page.updated` -- page metadata is updated
- `page.published` -- a page is published live
- `page.unpublished` -- a page is taken offline
- `page.deleted` -- a page is permanently deleted

### Entry events
- `entry.saved` -- entry content is saved
- `entry.published` -- an entry is published
- `entry.unpublished` -- an entry is taken offline
- `entry.deleted` -- an entry is deleted

## Webhook Configuration

Webhooks are configured in the Pixelesq dashboard (Settings > Webhooks):

- **Name** -- descriptive name for the webhook
- **URL** -- the endpoint to receive notifications
- **Type** -- GET or POST
- **Headers** -- custom headers (e.g., authorization tokens)
- **Body** -- request body template (for POST requests)
- **Subscription** -- which events trigger this webhook

## Context Variables

Webhook payloads can include these context variables:

- `{{page_slug}}` -- the page's URL slug
- `{{page_id}}` -- the page's unique ID
- `{{entry_id}}` -- the entry's unique ID
- `{{collection_id}}` -- the collection's ID
- `{{project_id}}` -- the project's ID
- `{{actor_name}}` -- name of the user who performed the action
- `{{actor_email}}` -- email of the user

## Automation Patterns

### Slack notifications on publish

**Use case:** Team gets notified when content goes live.

```
Event: page.published
URL: https://hooks.slack.com/services/YOUR/WEBHOOK/URL
Type: POST
Body: {
  "text": "📄 Page published: {{page_slug}} by {{actor_name}}"
}
```

### Deployment trigger

**Use case:** Trigger a build/deployment when content changes.

```
Event: page.published
URL: https://api.vercel.com/v1/integrations/deploy/YOUR_HOOK
Type: POST
```

### CMS sync

**Use case:** Keep an external system in sync with content changes.

```
Event: entry.published
URL: https://your-api.com/webhooks/pixelesq
Type: POST
Headers: { "Authorization": "Bearer YOUR_TOKEN" }
Body: {
  "event": "entry.published",
  "entry_id": "{{entry_id}}",
  "collection_id": "{{collection_id}}",
  "project_id": "{{project_id}}"
}
```

### Content moderation

**Use case:** Review content before it goes live.

```
Event: page.saved
URL: https://your-moderation-api.com/review
Type: POST
Body: {
  "page_id": "{{page_id}}",
  "author": "{{actor_email}}"
}
```

### Analytics event tracking

**Use case:** Log content lifecycle events to an analytics platform.

```
Events: page.created, page.published, page.deleted
URL: https://your-analytics.com/events
Type: POST
Body: {
  "event_type": "content_lifecycle",
  "page_slug": "{{page_slug}}",
  "actor": "{{actor_name}}"
}
```

## Best Practices

- Use POST webhooks for richer payloads; GET is for simple pings
- Include an authorization header for security
- Handle webhook failures gracefully on the receiving end (Pixelesq does not retry)
- Test webhooks with a service like webhook.site before connecting production endpoints
- Subscribe to specific events rather than all events to reduce noise
