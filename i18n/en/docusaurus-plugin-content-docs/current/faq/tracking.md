---
id: tracking
title: Data tracking
---

#### Tracking elements of the debate space

You can track page views, retention and other statistics directly from your analytics system (Google Analytics, Matomo, Webtrekk, Parsely).

As for the elements within the debate space, we have set up "data-tid" elements on the main calls to action so that you can track these elements (per view or per click for example).
Here are the data-tid for these different calls to action.

### Monitoring a disconnected user

Click on "Connection" : `data-tid=”action_login_link”`

### Identical user tracking offline / online

Click on a vote : `data-tid=”action_vote”`

Click on the debate follow-up : `data-tid="action_follow_debate"`

Click on a share link : `data-tid="action_share_debate_facebook"`, `data-tid="action_share_debate_clipboard”`, `data-tid="action_share_debate_twitter"`, `data-tid="action_share_debate_mail"`

Click on a debate tag : `data-tid="action_search_debate_tag"`

Click on a debate image : `data-tid="view_debate_image"`

Click on "Sources" : `data-tid="action_add_source"`

Click on send argument : `data-tid="action_submit_argument"`

Click on reply to an argument : `data-tid="action_reply_argument"`

Click on "See the article related to the debate" : `data-tid="link_back_source"`

Click on the link to the index of debates : `data-tid="view_index"`

Click on someone's profile : `data-tid="action_view_argument_author_name"`

Click on "Suggest a debate": `data-tid="action_suggestions_banner"`

Click on "View more suggestions" : `data-tid="action_suggestions_banner_view_more"`

Click on the "Consultation" tab : `data-tid="view_consultation"`

Click on the "Suggestion" tab : `data-tid="view_suggestions"`

### Follow-up specific to the logged-in user

Click on "Update" of the vote : `data-tid="action_edit_vote"`

Click on the "Notifications" bell : `data-tid=”action_view_notifications"`

Click on your profile avatar : `data-tid="view_user_profile"`

Click on "Edit profile" : `data-tid="action_edit_profile"`
