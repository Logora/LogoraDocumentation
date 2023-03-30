---
id: tracking
title: Data tracking
---

#### Tracking elements of the debate space

You can follow the number of page views, retention, and other stats directly from your analytics system (Google Analytics, Matomo, Webtrekk, Parsely).

For items within the debate space, we have put in place "data-tid" elements on the main calls to action for you to track these elements (display or click for example).

For example, in the case of Google, you can create a trigger on each of the elements that interest you from Google Tag Manager.

These triggers are returned in your Google Analytics statistics, you can track the paths / behaviors of your users.

### Monitoring the performance of the footer block

Click on "View result": `data-tid="show_vote_result"`

Click on one of the votes in the footer: `data-tid="action_vote_embed"`

Click on "Readers' debate": `data-tid="link_debate_index_embed"`

Click on the title of the summary debate: `data-tid="link_debate_title_embed"`

Click on "See more" of an argument: `data-tid="link_argument_read_more"` 

### Monitoring a disconnected user

Click on "Connection" : `data-tid=”action_login_link”`

### Identical user tracking offline / online

Click on a vote on the debate space : `data-tid=”action_vote”`

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
